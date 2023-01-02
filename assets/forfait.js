var Forfaits = [
        //MANGO
        [
            'Mango Plenty J',//Nom
            25,//SMS
            0,//Appels
            0,//Data
            1,//Validité
            100//Prix
        ],
        [
            'Mango Plenty S',
            1000,
            1460,
            0,
            7,
            250
        ],
        [
            'Mango Plenty M',
            10000,
            1950,
            0,
            30,
            450
        ],
        [
            'Mango Giga 3J 1200',
            0,
            0,
            1,
            3,
            2100
        ],
        [
            'Mango Giga 3J 5400',
            0,
            0,
            4,
            3,
            2400
        ],
        [
            'Mango Giga 3J 2650',
            0,
            0,
            7,
            7,
            2650
        ],
        [
            'Mango Giga 7J 5400',
            0,
            0,
            14,
            7,
            5600
        ],
        [
            'Mango Giga 7J 15400',
            0,
            0,
            35,
            7,
            15400
        ],
        [
            'Mango Giga 30J 10000',
            0,
            0,
            30,
            30,
            10000
        ],
        [
            'Mango Giga 3J 21500',
            0,
            0,
            60,
            30,
            21500
        ],
        [
            'Mango Flex 300-1',
            100,
            1300,
            30,
            7,
            300
        ],
        [
            'Mango Flex 300-2',
            100,
            1500,
            0,
            7,
            300
        ],
        [
            'Mango Flex 300-3',
            100,
            1400,
            25,
            7,
            300
        ],
        [
            'Mango Flex 300-4',
            100,
            1200,
            0,
            7,
            300
        ],
        [
            'Mango PS combo',
            10000,
            15000,
            6,
            30,
            5000
        ],
        [
            'Mango PS 2100',
            0,
            0,
            4.5,
            30,
            2100
        ],
        [
            'Mango PS talk',
            0,
            10000,
            0,
            30,
            1000
        ],
        [
            'Mango PS 1200',
            0,
            0,
            2.2,
            30,
            1200
        ],
        [
            'Mango PS 500',
            0,
            0,
            0.9,
            30,
            500
        ],
        [
            'Mango PS 400',
            10000,
            0,
            0,
            30,
            400
        ],
        [
            'Mango PS 50',
            0,
            0,
            0.05,
            1,
            5000
        ],
    
        //HEMLE
        [
            'Hemle Jour 99',
            0,
            750,
            0,
            1,
            99
        ],
        [
            'Hemle Jour 149',
            0,
            1460,
            0,
            1,
            149
        ],
        [
            'Hemle Jour 199',
            0,
            1950,
            0,
            1,
            199
        ],
        [
            'Hemle Jour 249',
            50,
            3500,
            0,
            1,
            99
        ],
        [
            'Hemle Semaine 499',
            0,
            3800,
            0,
            7,
            499
        ],
        [
            'Hemle Semaine 999',
            0,
            7950,
            0,
            7,
            999
        ],
        [
            'Hemle Semaine 1500',
            50,
            12200,
            0,
            7,
            1500
        ],
        [
            'Hemle Mois 2999',
            0,
            23390,
            0,
            30,
            2999
        ],
        [
            'Hemle Net 3J',
            0,
            0,
            0.160,
            3,
            160
        ],
        [
            'Hemle Net 599',
            0,
            0,
            0.660,
            30,
            599
        ],
        [
            'Hemle Net 849',
            0,
            0,
            1,
            30,
            1500
        ],
        [
            'Hemle Net 949',
            0,
            0,
            1.77,
            30,
            949
        ],
        [
            'Hemle Appels 100',
            20,
            300,
            0,
            1,
            100
        ],
        [
            'Hemle Appels J 250',
            20,
            750,
            0,
            1,
            250
        ],
        [
            'Hemle Appels S 300',
            20,
            900,
            0,
            7,
            300
        ],
        [
            'Hemle Appels M 600',
            50,
            1800,
            0,
            30,
             600
        ],
        [
            'Hemle Appels M 26k',
            500,
            96000,
            0,
            30,
             2600
        ],
        [
            'Hemle Illimité J',
            150,
            0,
            0,
            1,
             20
        ],
        [
            'Hemle Illimité M',
            9000,
            0,
            0,
            30,
            500
        ],
        [
            'Hemle Comp S 1000',
            100,
            3000,
            0.075,
            7,
             1000
        ],
        [
            'Hemle Comp S 2500',
            100,
            8500,
            0.250,
            7,
             1500
        ],
        [
            'Hemle Comp M 3000',
            250,
            9000,
            0.250,
            30,
             3000
        ],
        [
            'Hemle Comp M 5000',
            500,
            17000,
            0.5,
            30,
             5000
        ],
        [
            'Hemle Comp M 10000',
            500,
            35000,
            1,
            30,
             10000
        ],
    
    
    
    
    
    
    
    
    
    
    
    
];
    
    
    var X = document.getElementById("X").value;
    var n = document.getElementById("n").value;
    var s = document.getElementById("s").value;
    var a = document.getElementById("a").value;
    var d = document.getElementById("d").value;

    
    var T = new Array(Number);
    var tabPoids = new Array(Number);
    var tabPoidsMax = new Array(Number);
    var tabBestForfait= new Array(Number);

    //1ere Etape: Fonction pour spécifier les forfaits éligibles à la somme et au nombre de jour
    //[Nom,SMS,Appels,Data,Validité,Prix]
    function Elig(X,n) {
        let j=0;
        for (let i = 0; i < Forfaits.length; i++) {
            if ((X >= Forfaits[i][5]) && (n <= Forfaits[i][4])) {
                T[j] = i;
                j++;
            }  
        }
        return T;
    }
    //2eme Etape: Etablir les poids des forfaits éligibles
    function Poids(T,s,a,d) {
        k=0;
        if (!(s==0 || s==1 || s==2 || s==3) && !(a==0 || a==1 || a==2 || a==3) && !(d==0 || d==1 || d==2 || d==3)) {
            return " Les priorités doivent être 0, 1, 2 ou 3!!"
        } else {
                    for (let j = 0; j < T.length-1; j++) {
            tabPoids[k] = ((s*Forfaits[T[k]][1]) / 10000) + ((a*Forfaits[T[k]][2]) / 96000) + ((d*Forfaits[T[k]][3]) / 60);
            k++;
        }
        return tabPoids;
        }

    }
    
    
    //3eme Etape: Trouver les poids max
    function PoidsMax(tabPoids) {
        c=0;
        //let max = Math.max(tabPoids);
        for (let l = 0; l < tabPoids.length-1; l++) {
            if (Math.max.apply(Math,tabPoids) == tabPoids[l]) {
                tabPoidsMax[c] = l;
                c++;
            }      
        }
        return tabPoidsMax;
    }
    
    //4eme étape: Afficher le meilleur des forfaits
    function BestForfait(tabPoidsMax) {
    
        let p=0;
        
        for (let m = 0; m < tabPoidsMax.length; m++) {
            tabBestForfait[p] = Forfaits[tabPoidsMax[m]]; 
            p++;      
        }
        return console.log(tabBestForfait);
    }
    
    function UserChoice(X,n,s,a,d) {
        return BestForfait(PoidsMax(Poids(Elig(X,n),s,a,d)))
    }
    
        //ici c'était juste une fonction pour calculer le poids moyen des forfaits par opérateur
        //Mango(22) pour le poids moyen de Mango et Mango(45)-Mango(22) pour celui de Hemle 
    function Mango(f) {let tabMango=0;
        for (let i = 0; i < f; i++) {
            for (let j = 0; j < 4; j++) {
            
                tabMango =tabMango + ((j*Forfaits[i][1]) / 10000) + ((j*Forfaits[i][2]) / 96000) + ((j*Forfaits[i][3]) / 60);  
            
            }
        }
        return tabMango;
    }
    
    
    
    
    
    
    
    
    
    
    


















