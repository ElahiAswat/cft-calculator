// Set current year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// CFT Calculation
document.getElementById('calculateBtn').addEventListener('click', () => {
  const lengthFt = parseFloat(document.getElementById('lengthFt').value) || 0;
  const lengthIn = parseFloat(document.getElementById('lengthIn').value) || 0;
  const widthFt = parseFloat(document.getElementById('widthFt').value) || 0;
  const widthIn = parseFloat(document.getElementById('widthIn').value) || 0;
  const heightFt = parseFloat(document.getElementById('heightFt').value) || 0;
  const heightIn = parseFloat(document.getElementById('heightIn').value) || 0;

  const length = lengthFt + (lengthIn / 12);
  const width = widthFt + (widthIn / 12);
  const height = heightFt + (heightIn / 12);

  const cft = length * width * height;

  document.getElementById('result').textContent = `${cft.toFixed(3)} CFT`;
});
