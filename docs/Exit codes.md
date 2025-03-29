# Exit codes

If pandoc completes successfully, it will return exit code 0. Nonzero
exit codes have the following meanings:

<table>
<thead>
<tr>
<th style="text-align: right;">Code</th>
<th style="text-align: left;">Error</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: right;">1</td>
<td style="text-align: left;">PandocIOError</td>
</tr>
<tr>
<td style="text-align: right;">3</td>
<td style="text-align: left;">PandocFailOnWarningError</td>
</tr>
<tr>
<td style="text-align: right;">4</td>
<td style="text-align: left;">PandocAppError</td>
</tr>
<tr>
<td style="text-align: right;">5</td>
<td style="text-align: left;">PandocTemplateError</td>
</tr>
<tr>
<td style="text-align: right;">6</td>
<td style="text-align: left;">PandocOptionError</td>
</tr>
<tr>
<td style="text-align: right;">21</td>
<td style="text-align: left;">PandocUnknownReaderError</td>
</tr>
<tr>
<td style="text-align: right;">22</td>
<td style="text-align: left;">PandocUnknownWriterError</td>
</tr>
<tr>
<td style="text-align: right;">23</td>
<td style="text-align: left;">PandocUnsupportedExtensionError</td>
</tr>
<tr>
<td style="text-align: right;">24</td>
<td style="text-align: left;">PandocCiteprocError</td>
</tr>
<tr>
<td style="text-align: right;">25</td>
<td style="text-align: left;">PandocBibliographyError</td>
</tr>
<tr>
<td style="text-align: right;">31</td>
<td style="text-align: left;">PandocEpubSubdirectoryError</td>
</tr>
<tr>
<td style="text-align: right;">43</td>
<td style="text-align: left;">PandocPDFError</td>
</tr>
<tr>
<td style="text-align: right;">44</td>
<td style="text-align: left;">PandocXMLError</td>
</tr>
<tr>
<td style="text-align: right;">47</td>
<td style="text-align: left;">PandocPDFProgramNotFoundError</td>
</tr>
<tr>
<td style="text-align: right;">61</td>
<td style="text-align: left;">PandocHttpError</td>
</tr>
<tr>
<td style="text-align: right;">62</td>
<td style="text-align: left;">PandocShouldNeverHappenError</td>
</tr>
<tr>
<td style="text-align: right;">63</td>
<td style="text-align: left;">PandocSomeError</td>
</tr>
<tr>
<td style="text-align: right;">64</td>
<td style="text-align: left;">PandocParseError</td>
</tr>
<tr>
<td style="text-align: right;">66</td>
<td style="text-align: left;">PandocMakePDFError</td>
</tr>
<tr>
<td style="text-align: right;">67</td>
<td style="text-align: left;">PandocSyntaxMapError</td>
</tr>
<tr>
<td style="text-align: right;">83</td>
<td style="text-align: left;">PandocFilterError</td>
</tr>
<tr>
<td style="text-align: right;">84</td>
<td style="text-align: left;">PandocLuaError</td>
</tr>
<tr>
<td style="text-align: right;">89</td>
<td style="text-align: left;">PandocNoScriptingEngine</td>
</tr>
<tr>
<td style="text-align: right;">91</td>
<td style="text-align: left;">PandocMacroLoop</td>
</tr>
<tr>
<td style="text-align: right;">92</td>
<td style="text-align: left;">PandocUTF8DecodingError</td>
</tr>
<tr>
<td style="text-align: right;">93</td>
<td style="text-align: left;">PandocIpynbDecodingError</td>
</tr>
<tr>
<td style="text-align: right;">94</td>
<td style="text-align: left;">PandocUnsupportedCharsetError</td>
</tr>
<tr>
<td style="text-align: right;">97</td>
<td style="text-align: left;">PandocCouldNotFindDataFileError</td>
</tr>
<tr>
<td style="text-align: right;">98</td>
<td style="text-align: left;">PandocCouldNotFindMetadataFileError</td>
</tr>
<tr>
<td style="text-align: right;">99</td>
<td style="text-align: left;">PandocResourceNotFound</td>
</tr>
</tbody>
</table>

