function DataConverter(t){this.nodeId=t,this.node=$("#"+t),this.outputDataTypes=[{text:"Actionscript",id:"as",notes:""},{text:"ASP/VBScript",id:"asp",notes:""},{text:"HTML",id:"html",notes:""},{text:"JSON - Properties",id:"json",notes:""},{text:"JSON - Column Arrays",id:"jsonArrayCols",notes:""},{text:"JSON - Row Arrays",id:"jsonArrayRows",notes:""},{text:"JSON - Dictionary",id:"jsonDict",notes:""},{text:"MySQL",id:"mysql",notes:""},{text:"PHP",id:"php",notes:""},{text:"Python - Dict",id:"python",notes:""},{text:"Ruby",id:"ruby",notes:""},{text:"XML - Properties",id:"xmlProperties",notes:""},{text:"XML - Nodes",id:"xml",notes:""},{text:"XML - Illustrator",id:"xmlIllustrator",notes:""}],this.outputDataType="json",this.columnDelimiter="\t",this.rowDelimiter="\n",this.inputTextArea={},this.outputTextArea={},this.inputHeader={},this.outputHeader={},this.dataSelect={},this.inputText="",this.outputText="",this.newLine="\n",this.indent="  ",this.root="rows",this.child="row",this.commentLine="//",this.commentLineEnd="",this.tableName="MrDataConverter",this.useUnderscores=!0,this.headersProvided=!0,this.downcaseHeaders=!0,this.upcaseHeaders=!1,this.includeWhiteSpace=!0,this.useTabsForIndent=!1}DataConverter.prototype.create=function(t,e){var i=this;this.inputHeader=$('<div class="groupHeader" id="inputHeader"><p class="groupHeadline">数据源输入<span class="subhead">（可以直接从Excel/CVS中拷贝内容到这里！ <a href="#" id="insertSample">简单示例！</a>）</span></p></div>'),this.inputTextArea=$('<textarea class="textInputs" id="dataInput" placeholder="输入CVS或者以tab为间隔的数据"></textarea>');for(var s='<div class="groupHeader" id="outputHeader"><p class="groupHeadline">结果转换为<select name="Data Types" id="dataSelector" class="form-control">',a=0;a<this.outputDataTypes.length;a++)s+='<option value="'+this.outputDataTypes[a].id+'" '+(this.outputDataTypes[a].id==this.outputDataType?'selected="selected"':"")+">"+this.outputDataTypes[a].text+"</option>";s+='</select><span class="subhead" id="outputNotes"></span></p></div>',this.outputHeader=$(s),this.outputTextArea=$('<textarea class="textInputs" id="dataOutput" placeholder="转换后的结果会显示在这里"></textarea>'),this.node.append(this.inputHeader),this.node.append(this.inputTextArea),this.node.append(this.outputHeader),this.node.append(this.outputTextArea),this.dataSelect=this.outputHeader.find("#dataSelector"),this.outputTextArea.click(function(t){this.select()}),$("#insertSample").bind("click",function(t){t.preventDefault(),i.insertSampleData(),i.convert(),_gaq.push(["_trackEvent","SampleData","InsertGeneric"])}),$("#dataInput").keyup(function(){i.convert()}),$("#dataInput").change(function(){i.convert(),_gaq.push(["_trackEvent","DataType",i.outputDataType])}),$("#dataSelector").bind("change",function(t){i.outputDataType=$(this).val(),i.convert()}),this.resize(t,e)},DataConverter.prototype.resize=function(t,e){var i=t,s=(e-90)/2-20;this.node.css({width:i}),this.inputTextArea.css({width:i-20,height:s}),this.outputTextArea.css({width:i-20,height:s})},DataConverter.prototype.convert=function(){if(this.inputText=this.inputTextArea.val(),this.outputText="",this.inputText.length>0){this.includeWhiteSpace?this.newLine="\n":(this.indent="",this.newLine=""),CSVParser.resetLog();var t=CSVParser.parse(this.inputText,this.headersProvided,this.delimiter,this.downcaseHeaders,this.upcaseHeaders),e=t.dataGrid,i=t.headerNames,s=t.headerTypes,a=t.errors;this.outputText=DataGridRenderer[this.outputDataType](e,i,s,this.indent,this.newLine),this.root&&this.child&&("xmlProperties"===this.outputDataType||"xml"===this.outputDataType)&&(this.outputText=this.outputText.replace(/rows/g,this.root),this.outputText=this.outputText.replace(/row/g,this.child)),this.outputTextArea.val(a+this.outputText)}},DataConverter.prototype.insertSampleData=function(){this.inputTextArea.val('NAME\tVALUE\tCOLOR\tDATE\nAlan\t12\tblue\tSep. 25, 2009\nShan\t13\t"green\tblue"\tSep. 27, 2009\nJohn\t45\torange\tSep. 29, 2009\nMinna\t27\tteal\tSep. 30, 2009')};