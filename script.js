var questions = [
    {
        qcm : 1,
        enonce : ["Soit P un plan, d une droite strictement parallèle à P et A un point n'appartenant ni à P ni à d.", "Le plan P' déterminé par d et A est parallèle à P."],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 1,
        enonce : ["P et P’ sont deux plans, d est une droite de P et d’ une droite de P’.", "Si P et P’ sont parallèles, alors :"],
        choix : ["d et d’ sont parallèles", "d et d’ sont sécantes", "d et d’ ne sont pas coplanaires", "on ne peut pas préciser la position relative de d et d’"],
        bonne_reponse : 3
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube", "Le point I est le milieu du segment [CD]","Le point J le milieu du segment [BC]", "Les droites (BF) et (EG) sont orthogonales"],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 0
    },
    {
        qcm : 1,
        enonce : ["<i>Des droites concourantes sont des droites qui se coupent en un même point</i><br>","P et P’ sont deux plans, d est une droite de P et d’ une droite de P’.", "Si P et P’ sont sécants suivant une droite D et si d et d’ sont sécantes, alors :"],
        choix : ["d et d’ sont parallèles à D", "d et d’ sont sécantes à D mais d, d’ et D ne sont pas concourantes", "d, d’ et D sont concourantes", "on ne peut pas préciser la position relative des droites d, d’ et D"],
        bonne_reponse : 2
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube","Le point I est le milieu du segment [CD]","Le point J le milieu du segment [BC]", "Les droites (EG) et (IJ) sont orthogonales"],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 0
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube.", "Les droites (HF) et (AC) sont :"],
        img : "img/cube2.png",
        choix : ["orthogonales", "coplanaires", "sécantes", "parallèles"],
        bonne_reponse : 0
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube.", "Les droites (AD) et (FG) sont :"],
        img : "img/cube2.png",
        choix : ["sécantes", "non coplanaires", "parallèles", "orthogonales"],
        bonne_reponse : 2
    },
    {
        qcm : 1,
        enonce : ["Si une droite d est strictement parallèle à un plan P et si d' est une droite de P, alors d et d' sont parallèles ou non coplanaires."],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 0
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube","Le point I est le milieu du segment [CD]","Le point J le milieu du segment [BC]", "Les droites (HI) et (GJ) sont sécantes"],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube, le point I' est le centre de la face ADHE et le point I est le centre de la face BCGF.", "La droite (II') est :"],
        img : "img/cube2.png",
        choix : ["coplanaire à la droite (BC)", "orthogonale à la droite (AC)", "parallèle à la droite (AF)", "orthogonale à la droite (AD)"],
        bonne_reponse : 3
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube", "Le point I est le milieu du segment [CD]","Le point J le milieu du segment [BC]", "Les plans (HDI) et (GCJ) ne sont pas sécants"],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube","Le point I est le milieu du segment [CD]","Le point J le milieu du segment [BC]", "La droite (HD) est orthogonale au plan (ABC)"],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 0
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube, le point I' est le centre de la face ADHE et le point I est le centre de la face BCGF.","Les plans (ABH) et (CDE) sont :"],
        img : "img/cube2.png",
        choix : ["parallèles", "sécants selon la droite (EF)","sécants selon la droite (II')", "confondus"],
        bonne_reponse : 2
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube.", "Le point I est le milieu du segment [CD]", "Le point J est le milieu du segment [BC]", "Les droites (HF) et (IJ) sont parallèles."],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 0
    },
    {
        qcm : 1,
        enonce : ["Si deux plans sont parallèles, alors toute droite de l'un est parallèle à toute droite de l'autre."],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube, le point I' est le centre de la face ADHE et le point I est le centre de la face BCGF."],
        img : "img/cube2.png",
        choix : ["un triangle", "un quadrilatère", "un pentagone", "un hexagone"],
        bonne_reponse : 1
    },
    {
        qcm : 1,
        enonce : ["P et P' sont deux plans, d est une droite de P et d' une droite de P'", "Si d et d' sont parallèles, alors :"],
        choix : ["P et P' sont parallèles", "P et P' sont sécants", "P et P' sont confondus", "On ne peut pas préciser la position relative de P et P'"],
        bonne_reponse : 3
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube.", "Le point I est le milieu du segment [CD]", "Le point J est le milieu du segment [BC]", "Les plans (BDF) et (EFG) sont sécants selon (HF)"],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 0
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube.", "Le point I est le milieu du segment [CD]", "Le point J est le milieu du segment [BC]", "Les droites (AH) et (ED) sont perpendiculaires"],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 0
    },
    {
        qcm : 1,
        enonce : ["ABCDEFGH est un cube.", "Le point I est le milieu du segment [CD]", "Le point J est le milieu du segment [BC]", "Les plans (DHE) et (GCB) sont parallèles."],
        img : "img/cube1.png",
        choix : ["Vrai", "Faux"],
        bonne_reponse : 0
    },
    {
        qcm : 3,
        enonce : ["Le plan P est défini par les points E, F et G tels que $\\vec{EF}(2; -1; 4) et $\\vec{EG}(1; 2; -2)$","Le plan P admet pour vecteur normal le vecteur $\\vec{n}$ tel que :"],
        choix : ["$\\vec{n}(-2; 0; 1)$", "$\\vec{n}(-6; 8; 5)$", "$\\vec{n}(1; -2; -1)$", "$\\vec{n}(8; -4; -5)$"],
        bonne_reponse : 1
    },
    {
        qcm : 3,
        enonce : ["Les plans P1 et P2 d'équations respectives :","2x - 3y + z = 0 et 2x + 3z + 1 = 0 sont parallèles."],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 3,
        enonce : ["Une équation du plan passant par A(1; 1; 1)","et de vecteur normal $\\vec{n}(2; 0; 3)$ est : 4x + 6y - 10 = 0"],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 3,
        enonce : ["Soit P le plan d'équation 4x - 2y + 3z - 1 = 0.","La droite passant par A(1; -1; -2) et de vecteur directeur $\\vec{u}(5; 1; -6)$ coupe le plan P en A."],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 3,
        enonce : ["Les plans P1 et P2 d'équations respectives : x + 3y + z = 0 et -3x + y + z = 0 sont perpendiculaires."],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 3,
        enonce : ["Le plan passant par le point A(1; -0,5; 3)","et de vecteur normal $\\vec{3; 2; -5)$ a pour équation"],
        choix : ["3x + 2y - 5z - 13 = 0", "x - 0,5y + 3z + 13 = 0", "-6x - 4y + 10z - 26 = 0", "3x - y - 15z + 41,5 = 0"],
        bonne_reponse : 2
    },
    {
        qcm : 3,
        enonce : ["Soit A(1; -1; 1), B(2; -2; 2) et C(0; 7; -1).","Le plan (ABC) a pour vecteur normal"],
        choix : ["$\\vec{n}(1; -2; -3)$", "$\\vec{n}(18; -3; 21)$", "$\\vec{n}(2; -2; 2)$", "$\\vec{n}(-6; 1; 7)$"],
        bonne_reponse : 3
    },
    {
        qcm : 4,
        enonce : ["On considère les vecteurs $\\vec{u}(1;-2;5)$ et $\\vec{v}(-5;1;3)$","Le produit scalaire $\\vec{u}~\\cdot~\\vec{v}$ est égal à :"],
        choix : [22,8,-5,-7],
        bonne_reponse : 1
    },
    {
        qcm : 4,
        enonce : ["Si $\\overrightarrow{AB}~.~\\overrightarrow{BC} = 6$ et $BC = 3$, alors"],
        choix : ["$AB = 2$", "$\\overrightarrow{AC}~\\cdot~\\overrightarrow{BC} = 15$", "$cos(\\widehat{ABC}) > 0$"],
        bonne_reponse : 1
    },
    {
        qcm : 4,
        enonce : ["On considère les vetcteurs $\\vec{u}(1;-2;5)$ et $\\vec{v}(-5;1;3)$.","Les vecteurs sont-ils orthogonaux ?"],
        choix : ["Vrai", "Faux"],
        bonne_reponse : 1
    },
    {
        qcm : 4,
        enonce : ["L'espace est muni d'un repère orthonormé $(O~;~\\vec{i}~,~\\vec{j}~,~\\vec{k})$.","On donne les points : $A(-4~;2~;-1~)~,B(-3~;3~;-4~)~,C(1~;4~;2~)~et~D(4,5~;7,5~;-8,5)$.","Les vecteurs $\\overrightarrow{AB}~,\\overrightarrow{BC}$ et $\\overrightarrow{AD}$ sont :"],
        choix : ["colinéaires", "deux à deux orhtogonaux", "coplanaires", "non coplanaires"],
        bonne_reponse : 2
    },
    {
        qcm : 4,
        enonce : ["Le plan P admet pour vecteur normal le vecteur $\\vec{n}~(-6~;8~;5~)$.","Un autre vecteur normal au plan P est :"],
        choix : ["le vecteur de coordonées (3; 4; 2,5)", "tout vecteur orthogonal à $\\vec{n}$", "tout vecteur colinéaire à $\\vec{n}$"],
        bonne_reponse : 2
    },
    {
        qcm : 4,
        enonce : ["Soit SABCD une pyramide de base ABCD, telle que toutes les arêtes sont de longueur 1, alors"],
        choix : ["$\\overrightarrow{SA}~\\cdot~\\overrightarrow{SB}$ = 1", "$\\overrightarrow{SD}~\\cdot~\\overrightarrow{SC}$ = 0,5", "$\\overrightarrow{AC}~\\cdot~\\overrightarrow{DB}$ = -1", "$\\overrightarrow{SD}~\\cdot~\\overrightarrow{DB}$ = 0"],
        bonne_reponse : 1
    },
    {
        qcm : 4,
        enonce : ["Si A(1; 1; 3), B(4; 2; 7) et C(5; -2; 1), alors"],
        choix : ["$\\overrightarrow{AB}~\\cdot~\\overrightarrow{AC}~=~-8$", "$\\widehat{ABC}~\\approx~0,83~rad$ à 0,01 près", "(AB) et (AC) sont perpendiculaires", "$\\overrightarrow{CA}~\\cdot~\\overrightarrow{CB}$ = 32"],
        bonne_reponse : 1
    },
    {
        qcm : 4,
        enonce : ["L'espace est muni d'un repère orthonormé $(O; \\vec{i},~\\vec{j},~\\vec{k})$.", "On donne les points : A(-4; 2; -1), B(-3; 3; -4), C(1; 4; 2) et D(4,5; 7,5; -8,5).","Les vecteurs $\\vec{AB}$ et $\\vec{CD}$ sont :"],
        choix : ["colinéaires", "orhtogonaux", "ni colinéaires ni orthogonaux", "de même norme"],
        bonne_reponse : 0
    },
    {
        qcm : 4,
        enonce : ["L'espace est muni d'un repère orthonormé $(O; \\vec{i},~\\vec{j},~\\vec{k})$.", "On donne les points : A(-4; 2; -1), B(-3; 3; -4), C(1; 4; 2) et D(4,5; 7,5; -8,5).","Les vecteurs $\\vec{AB}$ et $\\vec{AC}$ sont :"],
        choix : ["colinéaires", "orhtogonaux", "ni colinéaires ni orthogonaux", "de même norme"],
        bonne_reponse : 2
    }
];

var l_qcm = [];
var deja_posées = [];
var num_question_t = 0;
var num_question = 0;
var points = 0;
var nbr_questions_max = 0;

window.onload = function() {
    for (let i=1; i<=4; i++) {
        document.getElementById('qcm'+i).checked = false;
    }
}


function start() {
    for (let i=1; i<=4; i++) {
        if (document.getElementById('qcm'+i).checked) {
            l_qcm.push(i);
            if (i == 4){
                nbr_questions_max += 9;
            }
            else if (i == 1) {
                nbr_questions_max += 20;
            }
        }
    }
    if (document.getElementById('input-nbrquestions').value == "") {
        alert('Il faut indiquer le nombre de questions')
    }
    else if (l_qcm.length == 0) {
        alert('Il faut sélectionner au moins un QCM')
    }
    else if (document.getElementById('input-nbrquestions').value > nbr_questions_max || document.getElementById('input-nbrquestions').value < 1) {
        alert("Il y a "+nbr_questions_max+" questions maximum.")
        document.getElementById('input-nbrquestions').value = nbr_questions_max;
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
    if (questions[num_question_t].img != null) {
        document.getElementById('div-enonce').innerHTML += "<img src='"+questions[num_question_t].img+"' style='height:10%'>";
    }
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
