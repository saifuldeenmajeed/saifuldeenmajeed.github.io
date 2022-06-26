function numbers_pattern(x, y) {
    var output;
    output = ""; //Initially the variable is empty - to avoid 'undefind'

    for (i = 1; i <= x; i++) {
      for (j = 1; j <= y; j++) {
        if (j == 9 || j == 1 || i == 1 || i == 9)
          output += "<p class= 'one'> 1 </p> ";
        else if (j == 8 || j == 2 || i == 2 || i == 8)
          output += "<p class= 'two'> 2 </p> ";
        else if (j == 7 || j == 3 || i == 3 || i == 7)
          output += "<p class= 'three'> 3 </p> ";
        else if (j == 6 || j == 4 || i == 4 || i == 6)
          output += "<p class= 'four'> 4 </p> ";
        else if (j == 5 || j == 3 || i == 3 || i == 5)
          output += "<p class= 'five'> 5 </p> ";
      }
      output += "<br>";
    }
    return output;
  }


  document.write("<table border='1' width='100%'>");
document.write('<h1 style="text-align: center;"></br>SAIFULDEEN ALI MAJEED</br></h1>');
  document.write("<thead><tr><th>5x5</th><th>5x9</th><th>9x9</th></tr></thead>");
  document.write("<tbody><tr><td>", numbers_pattern(5, 5), "</td>");
  document.write("<td>", numbers_pattern(5, 9), "</td>");
  document.write("<td>", numbers_pattern(9, 9), "</td>");
  document.write("</tr></tbody>");
  document.write("</table>");
  