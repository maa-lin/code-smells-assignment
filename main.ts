/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumps: number[]): number {

    return jumps.reduce(
      (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump, 0
    );
  
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
  class Student {
    constructor(
      public name: string,
      public handedInOnTime: boolean,
      public passed: boolean
    ) {}
  }
  
  function getStudentGrade(student: Student): string {
  
    return student.handedInOnTime && student.passed ? "VG" : "IG";
  
  }
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
    class TemperatureReading {
      constructor(public city: string, public date: Date, public temperature: number) {}
    }
    
    function averageWeeklyTemperature(readings: TemperatureReading[], city: string) {
      const oneWeekAgo = Date.now() - 604800000;
    
      const validReadings = readings.filter(reading => reading.city === city && reading.date.getTime() > oneWeekAgo)
      const sum = validReadings.reduce((total, reading) => total + reading.temperature, 0)
    
      return sum / validReadings.length;
    }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
    class Product {
      constructor(
        public name: string,
        public price: number,
        public amount: number,
        public description: string,
        public image: string
      ) {}
    }
    
    function showProduct(product: Product, parent: HTMLElement) {
      const container = document.createElement("div");
      container.innerHTML = `<h4>${product.name}</h4>
      <img src="${product.image}" alt="Produkt bild">
      <br>
      <strong>Pris: ${product.price * product.amount} kr</strong>
      <p>${product.description}</p>`;
    
      parent.appendChild(container);
    }
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
  //  valde att göra en lista istället för två eftersom checkboxes redan visar om man är 
  //  passed eller failed, alternativt hade man kunnat göra två separata listor utan checkboxes, 
  //  Passed student & Failed Students 
  
    function presentStudents(students: Student[]) {
      const container = document.getElementById("container");
      const studentList = document.createElement("ul");
    
    students.forEach((student) => {
      const studentStatus = student.handedInOnTime ? "checked" : "";
      studentList.innerHTML += `<li>${student.name} <input type="checkbox" ${studentStatus}></li>`;
    })

    container?.appendChild(studentList);
  }
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  function concatenateStrings() {
    let result = "";
    result += "Lorem";
    result += "ipsum";
    result += "dolor";
    result += "sit";
    result += "amet";
  
    return result;
  }
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
  function createUser(
    name: string,
    birthday: Date,
    email: string,
    password: string
  ) {
    // Validation
  
    let ageDiff = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDiff);
    let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  
    console.log(userAge);
  
    if (!(userAge < 20)) {
      // Logik för att skapa en användare
    } else {
      return "Du är under 20 år";
    }
  }
  