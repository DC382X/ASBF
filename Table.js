var ts = window.open()
ts.document.write('
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
<table style="width:100%">
  <tr>
    <th>Opening</th>
    <th>Close</th> 
    <th>Does</th>
  </tr>
  <tr>
    <td>[b]</td>
    <td>[/b]</td>
    <td>Makes <b>Bold Text</b></td>
  </tr>
  <tr>
    <td>[i]</td>
    <td>[/i]</td>
    <td>Makes <i>Italic Text</i></td>
  </tr>
  <tr>
    <td>[u]</td>
    <td>[/u]</td>
    <td>Makes <u>Underline Text</u></td>
  </tr>
  <tr>
    <td>[s]</td>
    <td>[/s]</td>
    <td>Makes <s>Strikethrough Text</s></td>
  </tr>
</table>')
