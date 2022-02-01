var questions = [
    {
        qcm : 4,
        enonce : ["On considère les vecteurs $\\vec{u}(1;-2;5)$ et $\\vec{v}(-5;1;3)$","Le produit scalaire $\\vec{u}~.~\\vec{v}$ est égal à :"],
        choix : [22,8,-5,-7],
        bonne_reponse : 1
    },
    {
        qcm : 4,
        enonce : ["Si $\\overrightarrow{AB}~.~\\overrightarrow{BC} = 6$ et $BC = 3$, alors"],
        choix : ["$AB = 2$", "$\\overrightarrow{AC}~.~\\overrightarrow{BC} = 15$", "$cos(\\widehat{ABC}) > 0$"],
        bonne_reponse : 2
    },
    {
        qcm : 4,
        enonce : ["On considère les vetcteurs $\\vec{u}(1;-2;5)$ et $\\vec{v}(-5;1;3)$.","Les vecteurs sont-ils orthogonaux ?"],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 4,
        enonce : ["L'espace est muni d'un repère orthonormé $(O~;~\\vec{i}~,~\\vec{j}~,~\\vec{k})$.","On donne les points : $A(-4~;2~;-1~)~,B(-3~;3~;-4~)~,C(1~;4~;2~)~et~D(4,5~;7,5~;-8,5)$.","Les vecteurs $\\overrightarrow{AB}~,\\overrightarrow{BC}~et\\overrightarrow{AD}$ sont :"],
        choix : ["colinéaires", "deux à deux orhtogonaux", "coplanaires", "non coplanaires"],
        bonne_reponse : 2
    },
];

var l_qcm = [];
var deja_posées = [];
var num_question_t = 0;
var num_question = 0;
var points = 0;

window.onload = function() {
    for (let i=1; i<=4; i++) {
        document.getElementById('qcm'+i).checked = false;
    }
}

function start() {
    for (let i=1; i<=4; i++) {
        if (document.getElementById('qcm'+i).checked) {
            l_qcm.push(i);
        }
    }
    if (document.getElementById('input-nbrquestions').value == "") {
        alert('Il faut indiquer le nombre de questions')
    }
    else if (l_qcm.length == 0) {
        alert('Il faut sélectionner au moins un QCM')
    }
    else {
        document.getElementById('div-parametre').style.display = "none";
        document.getElementById('div-qcm').style.display = "inline-block";
        document.getElementById('span-numeroquestiontot').textContent = document.getElementById('input-nbrquestions').value;
        f_questions()
    }
};

function f_questions() {
    document.getElementById('div-enonce').innerHTML = "";
    document.getElementById('div-reponse').innerHTML = "";
    num_question_t = Math.round(Math.random()*(questions.length-1));
    while (true) {
        var n = false;
        for (let i of deja_posées) {
            if (num_question_t == i) {
                n = true
                break
            }
            else {
                n = false;
            }
        }
        var u = true
        for (let i of l_qcm) {
            if (questions[num_question_t].qcm == i) {
                u = true
                break
            }
            else {
                u = false;
            }
        }
        if (n == true || u == false) {
                num_question_t = Math.round(Math.random()*(questions.length-1));
        }
        else {
            deja_posées.push(num_question_t);
            break
        }
    }
    num_question += 1;
    document.getElementById('span-numeroquestion').textContent = num_question;
    var ct_enonce = document.getElementById('div-enonce');
    for (let i=0; i<questions[num_question_t].enonce.length; i++) {
        ct_enonce.innerHTML += questions[num_question_t].enonce[i];
        ct_enonce.innerHTML += "<br>";
    }
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, ct_enonce]);
    var ct_choix = document.getElementById('div-reponse');
    for (let i=0; i<questions[num_question_t].choix.length; i++) {
        inpt = document.createElement('input');
        inpt.id = "inpt"+i;
        inpt.type = "radio";
        inpt.name = "reponses";
        ct_choix.appendChild(inpt);
        ct_choix.innerHTML += questions[num_question_t].choix[i];
        ct_choix.innerHTML += "<br>";
    }
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, ct_choix]);

    document.getElementById('button-confirmer').style.display = '';
}

function f_confirmer() {
    for (let i=0;i<questions[num_question_t].choix.length; i++) {
        if (document.getElementById('inpt'+i).checked) {
            if (i == questions[num_question_t].bonne_reponse) {
                alert('BONNE REPONSE !');
                points += 1;
            }
            else {
                alert('MAUVAISE REPONSE ! La bonne réponse était la '+(questions[num_question_t].bonne_reponse+1)+"e réponse.");
            }
            if (deja_posées.length == document.getElementById('input-nbrquestions').value) {
                f_fini()
            }
            else {
                f_questions();
            }
        }
    }
    // alert("Il n'y a aucune réponse complétée !")
}

function f_fini() {
    document.getElementById('div-qcm').style.display = 'none';
    document.getElementById('span-points').textContent = points;
    document.getElementById('span-totpoints').textContent = document.getElementById('input-nbrquestions').value;
    document.getElementById('span-pourcentage').textContent = Math.round((points/document.getElementById('input-nbrquestions').value)*100);
    document.getElementById('div-fini').style.display = '';
}