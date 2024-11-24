const passwordArray = [
  "deePdarkseCret",
  "iamacatperson",
  "iREALLYlovecheesecake",
  "women",
  "pizzaisoverrated",
  "chance"
]

function unlock1() {
    const passwordInput = document.getElementById("entry1").value;
    const lock = document.getElementsByClassName("lock1")[0];

    if (passwordInput === passwordArray[0]) {
        lock.style.pointerEvents = 'auto'; 
        lock.textContent = "Oh. Nice Find.";
        lock.href = "youtube.com"
    } else if (passwordArray.includes(passwordInput) && passwordInput !== passwordArray[0]) {
        lock.textContent = "Right password, wrong spot.";
    } else {
        lock.textContent = "Wrong. Maybe a typo?";
}
}

function unlock2() {
    const passwordInput = document.getElementById("entry2").value;
    const lock = document.getElementsByClassName("lock2")[0];
    
    if (passwordInput === passwordArray[1]) {
        lock.style.pointerEvents = 'auto'; 
        lock.textContent = "Unlocked.";
    } else if (passwordArray.includes(passwordInput) && passwordInput !== passwordArray[1]) {
        lock.textContent = "Right password, wrong spot.";
    } else {
        lock.textContent = "Wrong. Maybe a typo?";
    }
}

function unlock3() {
  const passwordInput = document.getElementById("entry3").value;
  const lock = document.getElementsByClassName("lock3")[0];
  
  if (passwordInput === passwordArray[2]) {
      lock.style.pointerEvents = 'auto'; 
      lock.textContent = "Unlocked.";
  } else if (passwordArray.includes(passwordInput) && passwordInput !== passwordArray[2]) {
      lock.textContent = "Right password, wrong spot.";
  } else {
      lock.textContent = "Wrong. Maybe a typo?";
  }
}

function unlock4() {
    const passwordInput = document.getElementById("entry4").value;
    const lock = document.getElementsByClassName("lock4")[0];
    
    if (passwordInput === passwordArray[3]) {
        lock.style.pointerEvents = 'auto'; 
        lock.textContent = "Unlocked.";
    } else if (passwordArray.includes(passwordInput) && passwordInput !== passwordArray[3]) {
        lock.textContent = "Right password, wrong spot.";
    } else {
        lock.textContent = "Wrong. Maybe a typo?";
    }
}

function unlock5() {
    const passwordInput = document.getElementById("entry5").value;
    const lock = document.getElementsByClassName("lock5")[0];
    
    if (passwordInput === passwordArray[4]) {
        lock.style.pointerEvents = 'auto'; 
        lock.textContent = "Unlocked.";
    } else if (passwordArray.includes(passwordInput) && passwordInput !== passwordArray[4]) {
        lock.textContent = "Right password, wrong spot.";
    } else {
        lock.textContent = "Wrong. Maybe a typo?";
    }
}

function unlock6() {
    const passwordInput = document.getElementById("entry6").value;
    const lock = document.getElementsByClassName("lock6")[0];
    
    if (passwordInput === passwordArray[5]) {
        lock.style.pointerEvents = 'auto'; 
        lock.textContent = "Unlocked.";
    } else if (passwordArray.includes(passwordInput) && passwordInput !== passwordArray[5]) {
        lock.textContent = "Right password, wrong spot.";
    } else {
        lock.textContent = "Wrong. Maybe a typo?";
    }
}
