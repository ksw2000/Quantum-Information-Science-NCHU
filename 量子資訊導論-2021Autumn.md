---
tags: 大四

---
# 量子資訊科學導論 Autumn 2021

<style>
.センター {
  display: block;
  margin: 0 auto;
  width: 50%;
}
</style>

[![](https://img.shields.io/badge/dynamic/json?style=flat-square&color=green&label=%E7%B8%BD%E8%A7%80%E7%9C%8B%E6%95%B8&query=%24.viewcount&suffix=%E4%BA%BA%E6%AC%A1&url=https%3A%2F%2Fhackmd.io%2FmNaJo81zQu6Fv0dzLtEZIA%2Finfo)](https://hackmd.io/mNaJo81zQu6Fv0dzLtEZIA/info)

![](https://i.imgur.com/aHzBlRb.jpg)

[TOC]

## Outline

+ Historical and Philosophical Review of Quantum Mechanics
+ Introduction / Overview on Quantum Computation and Information Processing
+ Fundamentals of Quantum Information Science
+ Quantum Bit (Qubit) and Basic Principles of Quantum Mechanics
+ Quantum No-Cloning Theorem • Quantum Gates and Quantum Circuits
+ Quantum Entanglement and its Applications
+ Quantum Teleportation
+ Quantum Dense Coding
+ Quantum Cryptography
+ Quantum Key Distribution
+ Group presentation

## Grading

<!--![](https://i.imgur.com/xvHKMIL.png)-->

* Usual grades: 40%
    * 包含隨堂作業、小考、課堂、課後作業
* Midterm Exam: 20%
* Final Exam: 20%
* Class Report: 20%

<!--
## 摩爾定律

摩爾數 = 質量 / 分子量
![](https://i.imgur.com/nkEeKPi.png)-->

## Overview

+ {湯姆森|Thomson}: 首先發現量子現象，電子繞射
+ {普朗克|Planck}: $E=h\nu$， 能量是階梯式不連續分佈
+ {愛因斯坦|Einstein}: {光電效應|Photoelectric Effect}，由普朗克的量子化假說啟發
+ 1905年 物理{奇跡年|きせきねん}
+ 1913年 {波爾|Bohr}提出{氫原子模型|Bohr model}
+ 1923年 {德布羅伊|de Broglie}提出{物質波|Matter wave}，即粒子可以有波的特性，反之亦同
+ 1925年 {海森堡|Heisenberg}、{玻恩|Born}, {約爾當|P. Jordan} 發表{矩陣力學|Matrix mechanics}
+ 1925年 {薛丁格|Schrödinger}
    + 薛丁格方程式 $i\hbar\frac{\partial}{\partial t}\Psi= H\Psi$
    + ~~[薛丁格的內褲](https://wiki.komica.org/薛丁格的內褲)：穿裙子的女角，在裙子未掀起之前，無法確定她是否有穿內褲。~~
    + <img src="https://imgur.com/nGDs51i.png" style="width: 50%">
+ 1935 Locality in Einstein-Podolsky-Rosen paradox: {不思議|ふしぎ}な{距離|きょり}
+ 1964 [John Bell](https://www.youtube.com/watch?v=vI6QIoisuq0)→Bell's theorem
+ 1969 CHSH inequality


### 哥本哈根詮釋
+ 互補理論
+ 測不準原理
+ 波爾法則

![](https://i.imgur.com/032CCUi.png)

+ Locality ->  一地的狀態不應該影響到另一地
+ Probability -> 疊加態
+ NonLocality -> 糾纏態

![](https://i.imgur.com/ZCiSBK3.jpg =400x)

~~在還沒觀察可愛的妹子褲底有沒有隆起之前，妹子是屬於男孩子與女孩子的疊加態~~

<!--剛剛那張放小一點-->

<!--![](https://i.imgur.com/XYpUqeK.png)-->

<!-- ![](https://i.imgur.com/0APR6yX.png) -->

> 量子運算並非萬能，只有在**部分**情況下可以加速
> ex: shor algorithm 破解 RSA 加密
> 
> 一個完整功能的量子電腦可能代表RSA和其他的加密協定的結束(原計算條件改變)
> → 利用量子加密
> 
> {後量子密碼學|Post-quantum cryptography}：在傳統電腦上想辦法發明一個演算法不讓量子電腦能破解(無條件安全)

<!-- 
$$
\text{亮紋間距 }\Delta y = \frac{L\lambda}{d}
$$

$$
\text{物質波波長 }\lambda = \frac{h}{p}
$$ -->


## Qubits

![](https://i.imgur.com/iVAlHVl.png =400x)

A single quantum bit is a linear combination of a two level quantum system: {"zero", "one"}.

$$
|\psi\rangle = \alpha |0\rangle +\beta|1\rangle\\
\text{where } (\alpha, \beta)\in C^2 and\ \alpha^2 + \beta^2 = 1
$$


### inner product

$$
\langle abc||def\rangle=\langle abc|def\rangle=\begin{bmatrix}
   a & b &c
\end{bmatrix}\begin{bmatrix}
   d \\ e \\ f
\end{bmatrix} = ad+be+cf
$$

### outer product

$$
|def\rangle \langle abc | = |def\times abc|=\begin{bmatrix}d \\ e \\ f\end{bmatrix}\begin{bmatrix}a & b &c\end{bmatrix} = \begin{bmatrix}da & db & dc\\ea & eb & ec\\ fa & fb & fc\end{bmatrix}
$$

### Z basis
$$
|0\rangle=\begin{bmatrix}
   1 \\ 0
\end{bmatrix}
$$

$$
|1\rangle=\begin{bmatrix}
   0 \\ 1
\end{bmatrix}
$$

### X basis

$$
|+\rangle=\frac{1}{\sqrt{2}}(|0\rangle+|1\rangle)=\begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{1}{\sqrt{2}}\end{bmatrix}=|↗\rangle
$$


$$
|-\rangle=\frac{1}{\sqrt{2}}(|0\rangle-|1\rangle)=\begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{-1}{\sqrt{2}}\end{bmatrix}=|↘\rangle
$$

$$
|0\rangle=\begin{bmatrix}1\\0\end{bmatrix}=
\frac{1}{\sqrt{2}}
\begin{bmatrix}
\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}}
\end{bmatrix}
+
\frac{1}{\sqrt{2}}
\begin{bmatrix}
\frac{1}{\sqrt{2}} \\ \frac{-1}{\sqrt{2}}
\end{bmatrix}=\frac{1}{\sqrt{2}}|+\rangle+\frac{1}{\sqrt{2}}|-\rangle
$$

### Y basis

<!--

> 先做 X 再做 Z 會等於 Y 
> -->

### Multiples qubits

How about 2 Qubits? Use `Tensor product` (張量積) $A\otimes B$

$A\otimes B$ is not always equal to $B\otimes A$

$$
|00\rangle=|0\rangle\otimes|0\rangle=\begin{bmatrix}1\\0\end{bmatrix}\otimes\begin{bmatrix}1\\0\end{bmatrix}=\begin{bmatrix}1\begin{bmatrix}1\\0\end{bmatrix}\\0\begin{bmatrix}1\\0\end{bmatrix}\end{bmatrix}=\begin{bmatrix}1\\0\\0\\0\end{bmatrix}
$$

$$
|01\rangle=|0\rangle\otimes|1\rangle=\begin{bmatrix}1\\0\end{bmatrix}\otimes\begin{bmatrix}0\\1\end{bmatrix}=\begin{bmatrix}1\begin{bmatrix}0\\1\end{bmatrix}\\0\begin{bmatrix}0\\1\end{bmatrix}\end{bmatrix}=\begin{bmatrix}0\\1\\0\\0\end{bmatrix}
$$

$$
|10\rangle=|1\rangle\otimes|0\rangle=\begin{bmatrix}0\\1\end{bmatrix}\otimes\begin{bmatrix}1\\0\end{bmatrix}=\begin{bmatrix}0\begin{bmatrix}1\\0\end{bmatrix}\\1\begin{bmatrix}1\\0\end{bmatrix}\end{bmatrix}=\begin{bmatrix}0\\0\\1\\0\end{bmatrix}
$$

$$
|11\rangle=|1\rangle\otimes|1\rangle=\begin{bmatrix}0\\1\end{bmatrix}\otimes\begin{bmatrix}0\\1\end{bmatrix}=\begin{bmatrix}0\begin{bmatrix}0\\1\end{bmatrix}\\1\begin{bmatrix}0\\1\end{bmatrix}\end{bmatrix}=\begin{bmatrix}0\\0\\0\\1\end{bmatrix}
$$

**多項式展開**

$$
(a+b)\otimes(c+d)=a\otimes  c+a\otimes  d+b\otimes  c+b\otimes  d
$$

<!-- 
![](https://i.imgur.com/khQAPGd.png) -->

## Quantum Entanglement 量子糾纏
<!-- 
$$
\alpha = w|00\rangle+w|11\rangle
$$ -->

測量某顆 Qbits 仍無法知道另一顆的狀態，則不可稱為糾纏態。反過來說，如果我只要測量某顆 Qbits 而可以得知另一顆的狀態時，則可稱為糾纏態。<!--另外，糾纏態無法拆成兩個張量相加。-->

比如這四種：(也就郭姝妤說的 Bell basis)

$$
|\phi\rangle^+=\frac{|00\rangle+|11\rangle}{\sqrt{2}}=\frac{1}{\sqrt2}(|00\rangle+|11\rangle)
$$


$$
|\phi\rangle^-=\frac{|00\rangle-|11\rangle}{\sqrt{2}}=\frac{1}{\sqrt2}(|00\rangle-|11\rangle)
$$

$$
|\psi\rangle^+=\frac{|01\rangle+|10\rangle}{\sqrt{2}}=\frac{1}{\sqrt2}(|01\rangle+|10\rangle)
$$

$$
|\psi\rangle^-=\frac{|01\rangle-|10\rangle}{\sqrt{2}}=\frac{1}{\sqrt2}(|01\rangle-|10\rangle)
$$

以上這幾個糾纏態可以視為四維空間的正交積

> 口訣：$\phi$上下，$\psi$中間

## Quantum gates

![](https://i.imgur.com/G3f2mli.png)

### Pauli-X -Y -Z gate

Pauli Matrix: X 表示延 x 軸轉 180 度，Y 表示延 y 軸轉 180 度，Z 表示延 z 軸轉 180 度，

$$
I\equiv\begin{bmatrix}1 & 0 \\0 & 1\end{bmatrix}
$$

$$
X\equiv\begin{bmatrix}0 & 1 \\1 & 0\end{bmatrix}
$$

$$
Y\equiv\begin{bmatrix}0 & 1\\-1 & 0\end{bmatrix}
$$

$$
Z\equiv\begin{bmatrix}1 & 0\\0 & -1\end{bmatrix}
$$


### NOT gate

Not gate 與 Pauli-X 具有相同效果

$$
\begin{bmatrix}\alpha \\ \beta\end{bmatrix}\begin{bmatrix}0 & 1 \\ 1 & 0\end{bmatrix}=\begin{bmatrix}\beta \\ \alpha\end{bmatrix}
$$


### Hadamard gate

$$
H\equiv\frac{1}{\sqrt2}\begin{bmatrix}1 & 1 \\ 1 & -1\end{bmatrix}
$$


**e.g.**
$$
H|0\rangle=\frac{1}{\sqrt2}\begin{bmatrix}1 & 1 \\ 1 & -1\end{bmatrix}\begin{bmatrix}1\\ 0\end{bmatrix} = \frac{1}{\sqrt{2}}\begin{bmatrix}1\\ 1\end{bmatrix}=\frac{1}{\sqrt{2}}(|0\rangle+|1\rangle)
$$

$$
H|00\rangle = H(|0\rangle\otimes|0\rangle)=\frac{1}{\sqrt{2}}\begin{bmatrix}1 \\ 1\end{bmatrix}\otimes\frac{1}{\sqrt{2}}\begin{bmatrix}1 \\ 1\end{bmatrix} = \frac{1}{2}\begin{bmatrix}1\\1\\1\\1\end{bmatrix}
$$

### Controlled-NOT gate

![](https://i.imgur.com/pVL93B3.png =300x)

> 可以用傳統電路來想 `x->x` `y->x^y`
> x: control bit
> y: target bit

$$
CN\equiv\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0\end{bmatrix}
$$

> 做兩次 Controlled-not 等於沒做
> 1. 用矩陣證明
> 2. 用傳統電路思考做兩次 xor 等於沒做
<!--[](https://i.imgur.com/CaJO1Sj.png)-->

**Positive control-not gate & Negative control-not gate**

+ positive(實心點): control 是 1 時才更動 target
+ negative(空心點): control 是 0 時才更動 target

![](https://i.imgur.com/LJfdZvn.png =400x)

### Hadmard 與 Controlled-Not 混合電路

![](https://i.imgur.com/XJjKp0q.png =400x)

先計算
$$
H\otimes H = \frac{1}{2}\begin{bmatrix}1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1  \\ 1 & 1 & -1 & -1  \\ 1 & -1 & -1 & 1 \end{bmatrix}
$$

然後計算

<!--$$
M_1\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0\end{bmatrix}M_1=\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0\end{bmatrix}
$$-->

![](https://i.imgur.com/daWrSHl.png)

### Toffoli gate

![](https://i.imgur.com/I77hGIB.png)

aka control control not (CCNOT)

$$
\begin{bmatrix}1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0\\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1\\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0\\
\end{bmatrix}
$$

|in | in | in |out | out | out |
|:-:|:-:|:-:|:-:|:-:|:-:|
|0|0|0|0|0|0| 
|0|0|1|0|0|1|
|0|1|0|0|1|0|
|0|1|1|0|1|1|
|1|0|0|1|0|0|
|1|0|1|1|0|1|
|1|1|**0**|1|1|**1**|
|1|1|**1**|1|1|**0**|

只有當兩個 control 同時為 1 時，target 才為被反轉

### swap gate

![](https://i.imgur.com/vBOjHQf.png =300x)

input: (a, b) output: (b, a)

### Fredkin gate

![](https://i.imgur.com/EamKc2l.png =100x)

僅有 control bit 是 1 時會使 swap gate 做交換

## Change of Basis

$$
|++\rangle= \begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{1}{\sqrt{2}}\end{bmatrix} \otimes \begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{1}{\sqrt{2}}\end{bmatrix}=\begin{bmatrix}\frac{1}{2} \\ \frac{1}{2} \\ \frac{1}{2} \\ \frac{1}{2}\end{bmatrix}
$$

$$
|--\rangle= \begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{-1}{\sqrt{2}}\end{bmatrix} \otimes \begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{-1}{\sqrt{2}}\end{bmatrix}=\begin{bmatrix}\frac{1}{2} \\ \frac{-1}{2} \\ \frac{-1}{2} \\ \frac{1}{2}\end{bmatrix}
$$

$$
|+-\rangle= \begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{1}{\sqrt{2}}\end{bmatrix} \otimes \begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{-1}{\sqrt{2}}\end{bmatrix}=\begin{bmatrix}\frac{1}{2} \\ \frac{-1}{2} \\ \frac{1}{2} \\ \frac{-1}{2}\end{bmatrix}
$$


$$
|-+\rangle= \begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{-1}{\sqrt{2}}\end{bmatrix} \otimes \begin{bmatrix}\frac{1}{\sqrt{2}}\\\frac{1}{\sqrt{2}}\end{bmatrix}=\begin{bmatrix}\frac{1}{2} \\ \frac{1}{2} \\ \frac{-1}{2} \\ \frac{-1}{2}\end{bmatrix}
$$

$$
|\psi^+\rangle=\frac{1}{\sqrt{2}}\begin{bmatrix}1 \\ 0 \\ 0 \\ 1\end{bmatrix}=a\begin{bmatrix}\frac{1}{2} \\ \frac{1}{2} \\ \frac{1}{2} \\ \frac{1}{2}\end{bmatrix}+b\begin{bmatrix}\frac{1}{2} \\ \frac{-1}{2} \\ \frac{-1}{2} \\ \frac{1}{2}\end{bmatrix} + c \begin{bmatrix}\frac{1}{2} \\ \frac{-1}{2} \\ \frac{1}{2} \\ \frac{-1}{2}\end{bmatrix} + d \begin{bmatrix}\frac{1}{2} \\ \frac{1}{2} \\ \frac{-1}{2} \\ \frac{-1}{2}\end{bmatrix}
$$

![](https://i.imgur.com/kWb9qtq.png)

## No-cloning Theorem (會考證明)

量子不可複製理論

![](https://i.imgur.com/3CQld6E.png =300x)


![](https://i.imgur.com/ujLJa4B.png)

![](https://media.discordapp.net/attachments/863362246121619489/909695944604413952/week7_Quantum_gatesCircuits-21.jpg?width=667&height=472)

## Quantum Circuits

### Half-adder

| a | b | c | s |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |


![](https://i.imgur.com/EBlPRCL.png =150x)


### Full-adder

|c<sub>in</sub>| a | b | c<sub>out</sub> | s |
|:---:|:---:|:---:|:---:|---:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

![](https://i.imgur.com/5yyh4Gp.png =300x) 
電路合成問題是個 Open problem


### Reversible Circuit

![](https://i.imgur.com/UTl8Jc3.png)

可逆電路好處：能量不會浪費，用數學來說就是要做到 one-to-one and onto

**Example**
以半加法器來舉例，為了形成 reversible circuit 將真值表補齊

<style>
    .red{color:red}
    .orange{color:orange}
    .cyan{color:cyan}
    .blue{color:blue}
    .green{color:green}
</style>
> 1. 檢查是否有重複輸出，如果沒有就不用再補 output
> ![](https://i.imgur.com/K4HMbSO.png =400x)
> 2. 補完 input 補到 $2^3$ 種輸入
> ![](https://i.imgur.com/Qy6agXT.png =400x)
> 重點是要怎麼補呢？可以把狀態圖畫出來
> + Hard link: 原本有的(黑色實線)
> + Soft link: 自己加的(綠色虛線)
>
>| 選擇I | 選擇II |
>|:-------:|:--------:|
>|![](https://i.imgur.com/rLH4zRL.png =300x)|![](https://i.imgur.com/CdV5RJR.png =250x)|
> 
> 我們以 **選擇II** 來舉例
> ![](https://i.imgur.com/gW06bHU.png =400x)
> 
> 3. 最難的部分在四個狀態 cycle 的部分，其中一個方法是先選擇讓一條線斷掉
> * **單個**成一cycle**不理會**
> * **兩個**成一cycle**想成互換**
> * **三個以上**成一cycle : 
    > 想辦法做**互換**動作，以達成最終目標 
    > 選擇其中一條線斷掉(**斷狀態差最多**的那個)
    > 開始互換
    > 
>| 原先狀態 | 切斷狀態 |
>|:-------:|:---------:|
>|![](https://i.imgur.com/Kp4PAir.png =400x)| ![](https://i.imgur.com/b9pxEws.png =400x)|
>
> 4. 討論 bit 間的差距，只差一個 bit 稱相鄰，差超過一個 bit 稱不相鄰，不相鄰的的 state 需要先換成相鄰的
> >+ <span class="red">(0**1**1, 0**0**1)</span> 相鄰
> >+ <span class="green">(**00**1, **11**1)</span> 不相鄰
> >+ <span class="blue">(1**1**1, 1**0**1) 相鄰
> 
> <span class="green">(**00**1, **11**1)</span></span> 可以改成
> > (001, 011, 111) 或 (001, 101, 111)
> 
> 我們以前者做舉例，要達成前者，可以利用 3 次兩兩交換的方式來實作
> 
>  
> 5. 將最複雜的部分轉成邏輯闡 (其他自己連自己的狀態不用處理)並進行化簡
> C=<span class="red">(011,001)</span><span class="green">(001,011)(011,111)(001,011)</span><span class="blue">(111,101)</span>
> ![](https://i.imgur.com/RE65lFz.png =400x)

### Reduction

![](https://i.imgur.com/uztimHP.png)


---

[TOC]

---

https://hackmd.io/@NCHU-CSE-111/r1HDsErIt

![](https://i.imgur.com/gk26URU.png)



![](https://i.imgur.com/YXcC7dS.jpg)


## 作業 1

![](https://i.imgur.com/kZHusrE.png)

![](https://i.imgur.com/FEchaEQ.png)

## HandWritten Note 

[Note](https://drive.google.com/file/d/1Eh-oPEheF8LBqMk98FibHptLA16fYgn_/view?usp=sharing)