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
> {後量子密碼學|Post-quantum cryptography}：在傳統電腦上想辦法發明一個演算法不讓量子電腦能破解發明一個演算法不讓量子電腦能破解(無條件安全)

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
\text{where } (\alpha, \beta)\in C^2
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
|abc\rangle \langle def| = |abc\times def|=\begin{bmatrix}d \\ e \\ f\end{bmatrix}\begin{bmatrix}a & b &c\end{bmatrix} = \begin{bmatrix}da & db & dc\\ea & eb & ec\\ fa & fb & fc\end{bmatrix}
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



> 先做 X 再做 Z 會等於 Y 
> 

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

![](https://i.imgur.com/pVL93B3.png =400x)

可以用傳統電路來想 `x->x` `y->x^y`

$$
CN\equiv\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0\end{bmatrix}
$$

> 做兩次 Controlled-not 等於沒做
> 1. 用矩陣證明
> 2. 用傳統電路思考做兩次 xor 等於沒做
<!--[](https://i.imgur.com/CaJO1Sj.png)-->

### Hadmard 與 Controlled-Not 混合電路

![](https://i.imgur.com/XJjKp0q.png)

先計算
$$
H\otimes H = \frac{1}{2}\begin{bmatrix}1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1  \\ 1 & 1 & -1 & -1  \\ 1 & -1 & -1 & 1 \end{bmatrix}
$$

然後計算

<!--$$
M_1\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0\end{bmatrix}M_1=\begin{bmatrix}1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0\end{bmatrix}
$$-->

![](https://i.imgur.com/daWrSHl.png)

## Change of Basis



---

[TOC]

---

:::spoiler
波紋疾走 

![](https://i.imgur.com/CjCqyeA.png)

![](https://i.imgur.com/HoddLoP.png)

觀測量子導致疊加態崩壞，與{原子崩壞|Melt Downer}原理類似

电子与光一样可因应状况，显示出“粒子”与“波形”两者的性质，{麥野沈利|むぎの しずり} ({超能力者|Level5}第4名)则拥有能强制操纵介于两者之间“暧昧状况电子”的能力（发射出来的既不是电波也不是粒子，而是电子本身）。像这种“暧昧状况下固定的电子”就算撞击到物体，由于无法决定会呈现“粒子”与“波形”任何一方的反应，就会“滞留”于当场。原本电子只拥有无限接近于零的质量，但这种“滞留”的效力会成为拟似障壁，这道障壁会以释放时的速度，以可怕的威力撞击到目标上。


![](https://i.imgur.com/kCLBTJF.png)



## {Markdown 語法練習區 | 驚不驚喜，意不意外}

{超電磁砲|ReLUgun}、{一方通行|Accelerator}

{外裝代腦|Exterior}、{樹行圖設計者|Tree Diagram}

{AIM擴散力場|An Invountary Movement}

{超能力者|Level5}

{風紀委員|Judgement}、{警備員|Anti-Skill}

{幻想御手|Level Upper}

{御坂妹妹|Sisters}

{星爆氣流斬|Starburst Stream}

{右眼的封印|Code  871}

![](https://i.imgur.com/R0XRpki.png)

<img src="https://i.imgur.com/0ajdcm6.jpg" class="センター">

---

## 廣告

![](https://i.imgur.com/wnnoK46.png)



不同角度的光比如 僕たちはひとつの光


![](https://i.imgur.com/MMfT994.png)

:::

![](https://i.imgur.com/gk26URU.png)


![](https://i.imgur.com/kWb9qtq.png)


![](https://i.imgur.com/YXcC7dS.jpg)
