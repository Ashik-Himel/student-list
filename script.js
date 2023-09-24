const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tabContent1 = document.getElementById("tab-content-1");
const tabContent2 = document.getElementById("tab-content-2");

function showHideContent() {
  if (tab1.classList.contains('button-primary')) {
    tabContent1.style.display = 'block';
    tabContent2.style.display = 'none';
  }
  if (tab2.classList.contains('button-primary')) {
    tabContent1.style.display = 'none';
    tabContent2.style.display = 'block';
  }
}

tab1.addEventListener('click', function() {
  if (!(tab1.classList.contains('button-primary'))) {
    tab1.classList = 'button-primary';
    tab2.classList = 'button-outline';
    showHideContent();
  }
})
tab2.addEventListener('click', function() {
  if (!(tab2.classList.contains('button-primary'))) {
    tab2.classList = 'button-primary';
    tab1.classList = 'button-outline';
    showHideContent();
  }
})