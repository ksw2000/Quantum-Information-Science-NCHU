// ----------------------------- Material Design Component ---------------------
const MDCTextField = mdc.textField.MDCTextField;
const MDCRipple = mdc.ripple.MDCRipple;
const MDCSnackbar = mdc.snackbar.MDCSnackbar;
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

// -------------------------------- Main logic ---------------------------------
const lowCtrl = 0;
const highCtrl = 1;
const emptyWire = 2;
const target = 3;
const canvas = document.getElementById("circuit-preview");

// input: 1d array
// circuit: 1d array
function calcUnit(input, circuit) {
    var output = Array.from(input);

    if (input.length != circuit.length) {
        throw ('circuit error');
    }

    var reverse = true;
    //var haveAtLeastOneCtrlGate = false;
    for (let i = 0; i < input.length; i++) {
        if (circuit[i] == highCtrl || circuit[i] == lowCtrl) {
            //haveAtLeastOneCtrlGate = true;
            reverse = reverse && ((input[i] == 1 && circuit[i] == highCtrl) || (input[i] == 0 && circuit[i] == lowCtrl));
        }
    }

    //if (!haveAtLeastOneCtrlGate) {
    //    reverse = false;
    //}

    if (reverse) {
        for (let i = 0; i < input.length; i++) {
            if (circuit[i] == target) {
                output[i] = 1 - input[i];
            }
        }
    }
    return output;
}

// input: 1d array
// circuitList: 2d array
function calc(input, circuitList) {
    circuitList.forEach(circuit => {
        input = calcUnit(input, circuit);
    });
    return input;
}

// translate() converts rawCircuit to 2d-array cooked circuit
function translate(rawCircuit) {
    var res = [];
    lines = rawCircuit.split('\n');
    for (let i = 0; i < lines.length; i++) {
        line = [];
        for (j = 0; j < lines[i].length; j++) {
            switch (lines[i][j]) {
                case 'B':
                case 'b':
                    line.push(highCtrl);
                    break;
                case 'W':
                case 'w':
                    line.push(lowCtrl);
                    break;
                case 'N':
                case 'n':
                    line.push(target);
                    break;
                case 'E':
                case 'e':
                    line.push(emptyWire);
                    break;
            }
        }
        res.push(line);
    }
    return res;
}

// tableRenderer renders truth table by given @param outputs
// @param len: the number of the column of input(output)
// @param outputs: an object {
//     input: number[]
//     res: number[]   
// }
function tableRenderer(len, outputs) {
    var res = '';
    outputs.forEach((output) => {
        res += '<tr>';
        output.input.forEach((e) => {
            res += `<td>${e}</td>`;
        });
        output.res.forEach((e) => {
            res += `<td>${e}</td>`;
        });
        res += '</tr>\n';
    });

    // console.log(res);
    document.querySelector('#truth-table tbody').innerHTML = res;
    document.querySelectorAll('#truth-table thead th').forEach((dom) => {
        dom.colSpan = len;
    });
}

// circuitRenderer is able to present @param circuitList to canvas
function circuitRenderer(circuitList) {
    var ctx = canvas.getContext("2d");
    var girdSize = 30;
    var deltaX = girdSize / 2;
    var deltaY = girdSize / 2;
    var targetSize = girdSize / 3;
    var ctrlSize = 5;

    // set width and height
    canvas.width = circuitList.length * girdSize;
    canvas.height = circuitList[0].length * girdSize;

    // initialize ctx
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#000";

    // draw horizontal lines
    for (let i = 0; i < circuitList[0].length; i++) {
        ctx.moveTo(0, i * girdSize + deltaY);
        ctx.lineTo(circuitList.length * girdSize, i * girdSize + deltaY);
        ctx.stroke();
    }

    // draw vertical lines
    circuitList[0].length * girdSize;
    for (let j = 0; j < circuitList.length; j++) {
        ctx.moveTo(deltaX + j * girdSize, deltaY);
        ctx.lineTo(deltaX + j * girdSize, circuitList[0].length * girdSize - deltaY);
        ctx.stroke();
    }

    // draw gates
    circuitList.forEach((circuit, i) => {
        circuit.forEach((gate, j) => {
            switch (gate) {
                case target:
                    ctx.moveTo(deltaX + i * girdSize, deltaY + j * girdSize - targetSize);
                    ctx.lineTo(deltaX + i * girdSize, deltaY + j * girdSize + targetSize);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(deltaX + i * girdSize, deltaY + j * girdSize, targetSize, 0, 2 * Math.PI);
                    ctx.stroke();
                    break;
                case lowCtrl:
                    ctx.beginPath();
                    ctx.arc(deltaX + i * girdSize, deltaY + j * girdSize, ctrlSize, 0, 2 * Math.PI);
                    ctx.fillStyle = "#fff";
                    ctx.fill();
                    ctx.stroke();
                    break;
                case highCtrl:
                    ctx.beginPath();
                    ctx.arc(deltaX + i * girdSize, deltaY + j * girdSize, ctrlSize, 0, 2 * Math.PI);
                    ctx.fillStyle = "#000";
                    ctx.fill();
                    break;
            }
        });
    });
}

function run() {
    var rawCircuit = document.getElementById("raw-circuit").value;
    var circuit = translate(rawCircuit);
    circuitRenderer(circuit);

    // check circuit
    let len = 0;
    for (let i = 0; i < circuit.length; i++) {
        if (i == 0) {
            len = circuit[i].length;
        } else if (circuit[i].length != len) {
            snackbar.open();
            console.log("Input circuit error");
            return;
        }
    }

    let trueTableLen = 1 << len; // 2 ^ len
    let outputs = [];
    for (let i = 0; i < trueTableLen; i++) {
        // generate input
        // transfer i to binary
        let i2 = i;
        let input = new Array(len);
        for (let j = len - 1; j >= 0; j--) {
            input[j] = i2 & 1;
            i2 = i2 >> 1;
        }

        // calculate
        res = calc(input, circuit);
        outputs.push({
            input: input,
            res: res
        });
    }
    tableRenderer(len, outputs);
    return;
}

function runExample() {
    document.getElementById("raw-circuit").value = "B W N\nB N E";
    run();
}

// ------------------------------- DOM Listener --------------------------------
const btnRun = document.getElementById("btn-run");
if (btnRun) {
    btnRun.addEventListener('click', () => {
        run();
    });
}

const btnRunExample = document.getElementById("btn-run-example");
if (btnRunExample) {
    btnRunExample.addEventListener('click', () => {
        runExample();
    });
}

const btnSavePhoto = document.getElementById("btn-save-photo");
if (btnSavePhoto) {
    btnSavePhoto.addEventListener('click', () => {
        // reference: https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var a = document.createElement('a');
        a.href = image;
        a.download = 'download.png';
        a.click();
    });
}

window.onload = () => {
    runExample();
}