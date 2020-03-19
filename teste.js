var controlRICSD = 1; 
var controlQTNRO = 1; 
var controlQUEST = 1; 
var controlACAO = 1; 
var controlPROSAU =1; 
var controlGRUPO = 1; 
function addFilterRowGrupo(){ 
 	var lCD_GRUPO = document.getElementById('_GRUPO_FILTRO_CD_GRUPO').value; 
	var ID = 'GRUPO_'+controlGRUPO; 
  var row = document.getElementById('tableFilterGrupo').insertRow(-1); 
	var cell1 = row.insertCell(-1); 
	var cell2 = row.insertCell(-1); 
	var cell3 = row.insertCell(-1); 
	var cell4 = row.insertCell(-1); 
	var cell5 = row.insertCell(-1); 
	var cell6 = row.insertCell(-1); 
	var lURL; 
	var conecLogic = '<select style="width:70px;" '; 
	var agrupLogic1 = '<input title="Caracter Permitido:  (  Abre Parêntese  " onkeypress="if(event.keyCode != 40){ event.returnValue = false;}" type="text" '; 
	var agrupLogic2 = '<input title="Caracter Permitido:  )  Fecha Parêntese  " onkeypress="if(event.keyCode != 41){ event.returnValue = false;}" type="text" '; 
	conecLogic += 'name="'+ID+'_CONEC"'; 
	agrupLogic1 += 'name="'+ID+'_AGP1"'; 
	agrupLogic2 += 'name="'+ID+'_AGP2"'; 
	conecLogic += '><option></option><option value="AND">E</option><option value="OR">OU</option></select>'; 
	agrupLogic1 += ' style="width:50px;"/>'; 
	agrupLogic2 += ' style="width:50px;"/>'; 
	cell1.innerHTML = conecLogic; 
	cell2.innerHTML = agrupLogic1; 
	cell5.innerHTML = agrupLogic2; 
	cell4.innerHTML = '<select name="'+ID+'_COMP" style="width:250px;"><option></option><option value="PT">Presença em Todas Sessões</option><option value="PU">Presença em pelo menos uma Sessão </option><option value="FT">Faltou em Todas Sessões</option><option value="I">Inscrito no Grupo</option></select>'; 
	cell3.id = 'GRUPO_cell_' + row.rowIndex; 
  lURL = 'cajax?tipo=createLocalizadorGrupo&ID='+ID+'&WIDTH=173&CD_GRUPO='+lCD_GRUPO+'&CD_TMGRP='+document.getElementById('_TMGRP_CD_TMGRP').value; 
  controlACAO++; 
  makeRequest(cell3.id, lURL, null, returnAjaxLocalizador); 
	cell6.innerHTML = '<img src="pics/ico_excluir.gif"/ onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);">'; 
	controlGRUPO++; 
}
 function addFilterRow(opcao){
   	var cd_empsa_filtro = $("[name='CD_EMPSA']"); 
   	var lCD_EMPSA = $.map(cd_empsa_filtro, function(val,index) { return val.value; }).join(', ');	if(lCD_EMPSA != ''){ 
	    var row = getTableRow(opcao); 
	    var cell1 = row.insertCell(-1); 
	    var cell2 = row.insertCell(-1); 
	    var cell3 = row.insertCell(-1); 
	    if (opcao != '5') { 
	    var cell4 = row.insertCell(-1); 
	    var cell5 = row.insertCell(-1); 
	    } 
	    var cell6 = row.insertCell(-1); 
	    var cell7 = row.insertCell(-1); 
	    var lURL; 
	    var conecLogic = '<select style="width:70px;" '; 
	    var agrupLogic1 = '<input onkeypress="if(event.keyCode != 40){ event.returnValue = false;}" type="text" '; 
	    var agrupLogic2 = '<input onkeypress="if(event.keyCode != 41){ event.returnValue = false;}" type="text" '; 
	    switch(opcao){ 
	    	case '1': 
	    		var lCD_RICSD = document.getElementById('_RICSD_FILTRO_CD_RICSD').value; 
	    		var ID = 'RICSD_'+controlRICSD; 
	    		conecLogic += 'name="'+ID+'_CONEC"'; 
	    		agrupLogic1 += 'name="'+ID+'_AGP1"'; 
	    		agrupLogic2 += 'name="'+ID+'_AGP2"'; 
	    		cell4.innerHTML = '<select name="'+ID+'_COMP" style="width:50px;"><option></option><option> = </option><option> <> </option></select>'; 
	    		cell3.id = 'RICSD_cell_' + row.rowIndex + '_' + cell3.cellIndex; 
	    		cell5.id = 'RICSD_cell_' + row.rowIndex + '_' + cell5.cellIndex; 
	    		cell5.innerHTML = '<select disabled style="width:200px"></select>'; 
	    		window.eval( 	    			'function afterFill'+ID+'(){'   				   +'   var CD_RICSD = document.getElementById("_'+ID+'_CD_RICSD").value;'   				   +'   var lURL = "cajax?tipo=obterFiltroNivelSelect&ID='+ID+'_OPT&WIDTH=200px&CD_RICSD="+CD_RICSD;'    			   +'   makeRequest("'+cell5.id+'", lURL, null, returnAjaxLocalizador);'    			   +'}' 	    		);   				lURL = 'cajax?tipo=createLocalizadorRisco&ID='+ID+'&WIDTH=173&CD_EMPSA='+lCD_EMPSA+'&CD_RICSD='+lCD_RICSD; 
  				controlRICSD++; 
   				makeRequest(cell3.id, lURL, null, returnAjaxLocalizador); 
	    		break; 
	    	case '2': 
	    		var lCD_QUEST = document.getElementById('_QUEST_FILTRO_CD_QUEST').value; 
	    		var ID = 'QUEST_'+controlQUEST; 
	    		conecLogic += 'name="'+ID+'_CONEC"'; 
	    		agrupLogic1 += 'name="'+ID+'_AGP1"'; 
	    		agrupLogic2 += 'name="'+ID+'_AGP2"'; 
	    		cell4.innerHTML = '<select name="'+ID+'_COMP" style="width:50px;"><option></option><option> > </option><option> < </option><option> >= </option><option> <= </option><option> = </option><option> <> </option></select>'; 
	    		cell3.id = 'QUEST_cell_' + row.rowIndex + '_' + cell3.cellIndex; 
	    		cell5.id = 'QUEST_cell_' + row.rowIndex + '_' + cell5.cellIndex; 
	    		cell5.innerHTML = '<select disabled style="width:200px"></select>'; 
	    		window.eval( 
	    			'function afterFill'+ID+'(){'   				   +'   var CD_QUEST = document.getElementById("_'+ID+'_CD_QUEST").value;'   				   +'   var lURL = "cajax?tipo=obterFiltroResposta&ID='+ID+'_RESP&WIDTH=200px&CD_QUEST="+CD_QUEST;'    			   +'   makeRequest("'+cell5.id+'", lURL, null, returnAjaxLocalizador);'    			   +'}' 	    		);   				lURL = 'cajax?tipo=createLocalizadorQuestao&ID='+ID+'&WIDTH=173&CD_QUEST='+lCD_QUEST; 
  				controlQUEST++; 
   			makeRequest(cell3.id, lURL, null, returnAjaxLocalizador); 
	    		break; 
	    	case '3': 
	    		var lCD_ACAO = document.getElementById('_ACAO_FILTRO_CD_ACAO').value; 
	    		var ID = 'ACAO_'+controlACAO; 
	    		conecLogic += 'name="'+ID+'_CONEC"'; 
	    		agrupLogic1 += 'name="'+ID+'_AGP1"'; 
	    		agrupLogic2 += 'name="'+ID+'_AGP2"'; 
	    		cell4.innerHTML = '<select name="'+ID+'_COMP" style="width:50px;"><option></option><option> >= </option><option> <= </option><option> = </option></select>'; 
	    		cell3.id = 'ACAO_cell_' + row.rowIndex + '_' + cell3.cellIndex; 
	    		cell5.id = 'ACAO_cell_' + row.rowIndex + '_' + cell5.cellIndex; 
	    		cell5.innerHTML = '<input placeholder="Total" name="'+ID+'_PERCT" onkeypress="MascaraNumeroVirgulaNegativo();" type=text  style="width:200px">'; 
  				lURL = 'cajax?tipo=createLocalizadorAcao&ID='+ID+'&WIDTH=173&CD_ACAO='+lCD_ACAO+'&CD_EMPSA='+lCD_EMPSA; 
  				controlACAO++; 
   				makeRequest(cell3.id, lURL, null, returnAjaxLocalizador); 
	    		break; 
	    	case '4': 
	    		var lCD_ESPMD = document.getElementById('_ESPMD_FILTRO_CD_ESPMD').value; 
				if(!lCD_ESPMD){						alert('Selecione Profissional de Saúde');						return;					}	    		var ID = 'ESPMD_'+controlPROSAU; 
	    		conecLogic += 'name="'+ID+'_CONEC"'; 
	    		agrupLogic1 += 'name="'+ID+'_AGP1"'; 
	    		agrupLogic2 += 'name="'+ID+'_AGP2"'; 
	    		cell4.innerHTML = '<select name="'+ID+'_COMP" style="width:50px;"><option> = </option></select>'; 
	    		cell3.id = 'PROSAU_cell_' + row.rowIndex + '_' + cell3.cellIndex; 
	    		cell5.id = 'PROSAU_cell_' + row.rowIndex + '_' + cell5.cellIndex; 
	    		cell5.innerHTML = '<input type=text  style="width:200px">'; 
	    		window.eval( 	    			'function afterFill'+ID+'(){'   				   +'   var CD_ESPMD = document.getElementById("_'+ID+'_CD_ESPMD").value;'   				   +'   var lURL = "cajax?tipo=obterFiltroProfSaude&ID='+ID+'_OPT&WIDTH=173&CD_ESPMD="+CD_ESPMD+"&CD_EMPSA='+lCD_EMPSA+'";'    			   +'   makeRequest("'+cell5.id+'", lURL, null, returnAjaxLocalizador);'    			   +'}' 	    		); 
  				lURL = 'cajax?tipo=createLocalizadorEspec&ID='+ID+'&WIDTH=173&CD_ESPMD='+lCD_ESPMD; 
  				controlPROSAU++; 
   			makeRequest(cell3.id, lURL, null, returnAjaxLocalizador); 
	    		break; 
	    	case '5': 
	    		var lCD_QTNRO = document.getElementById('_QTNRO_FILTRO_CD_QTNRO').value; 
	    		var ID = 'QTNRO_'+controlQTNRO; 
	    		conecLogic += 'name="'+ID+'_CONEC"'; 
	    		agrupLogic1 += 'name="'+ID+'_AGP1"'; 
	    		agrupLogic2 += 'name="'+ID+'_AGP2"'; 
	    		cell3.id = 'QTNRO_cell_' + row.rowIndex + '_' + cell3.cellIndex; 
  				lURL = 'cajax?tipo=createLocalizadorQtnro&ID='+ID+'&WIDTH=173&CD_QTNRO='+lCD_QTNRO; 
  				controlQTNRO++; 
   			    makeRequest(cell3.id, lURL, null, returnAjaxLocalizador); 
	    		document.getElementById('ID_APPLY_QTNRO_SHOW_COLUMNS').style.display = ''; 
	    		break; 
	    } 
	    conecLogic += '><option></option><option value="AND">E</option><option value="OR">OU</option></select>'; 
	    agrupLogic1 += ' style="width:50px;"/>'; 
	    agrupLogic2 += ' style="width:50px;"/>'; 
	    cell1.innerHTML = conecLogic; 
	    cell2.innerHTML = agrupLogic1; 
	    cell6.innerHTML = agrupLogic2; 
	    if (opcao != '5') { 
	    if(cell4.innerHTML == ''){ 
	    	cell4.innerHTML = '<select style="width:50px;"><option></option><option> < </option><option> <= </option><option> > </option><option> >= </option><option> = </option><option> <> </option></select>'; 
	    } 
	    } 
	    cell7.innerHTML = '<img src="pics/ico_excluir.gif"/ onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);">'; 
	}else{ 
		alert('Selecione a empresa.'); 
	} 
} 
function getTableRow(opcao){ 
	    switch(opcao){ 
	    	case '1': 
	    		return document.getElementById('tableFilterRisco').insertRow(-1); 
	    		break; 
	    	case '2': 
	    		return document.getElementById('tableFilterQuestao').insertRow(-1); 
	    		break; 
	    	case '3': 
	    		return document.getElementById('tableFilterAcao').insertRow(-1); 
	    		break; 
	    	case '4': 
	    		return document.getElementById('tableFilterEspec').insertRow(-1); 
	    		break; 
	    	case '5': 
	    		return document.getElementById('tableFilterQtnro').insertRow(-1); 
	    		break; 
	    } 
} 
  function returnAjax(varRequest, tipo) { 
	var cell = document.getElementById(tipo); 
    var lStr = varRequest.responseText; 
    var lHTML = ''; 
    var lEval = ''; 
    var lScript = lStr.split('<scr'+'ipt'); 
    if(lScript != '') { 
      for (i=0; i < lScript.length; i++) { 
        if (lScript[i].indexOf('</scr'+'ipt>') != '-1') { 
          lScriptAux = lScript[i].split('</scr'+'ipt>'); 
          lEval += lScriptAux[0].substring(lScriptAux[0].indexOf('>')+1); 
          lHTML += lScriptAux[1]; 
        } else { 
          lHTML += lScript[i]; 
        } 
      } 
    } else { 
      lHTML = lStr; 
    } 
    if (lHTML != '') { 
		cell.innerHTML = lHTML; 
    } 
    if (lEval != '') { 
		window.eval(lEval); 
    } 
  } 
  function returnAjaxLocalizador(varRequest, tipo) { 
	var cell = document.getElementById(tipo); 
    var lStr = varRequest.responseText; 
    var lHTML = ''; 
    var lEval = ''; 
    var lScript = lStr.split('<scr'+'ipt'); 
    if(lScript != '') { 
      for (i=0; i < lScript.length; i++) { 
        if (lScript[i].indexOf('</scr'+'ipt>') != '-1') { 
          lScriptAux = lScript[i].split('</scr'+'ipt>'); 
          lEval += lScriptAux[0].substring(lScriptAux[0].indexOf('>')+1); 
          lHTML += lScriptAux[1]; 
        } else { 
          lHTML += lScript[i]; 
        } 
      } 
    } else { 
      lHTML = lStr; 
    } 
    if (lHTML != '') { 
		cell.innerHTML = lHTML; 
    } 
    if (lEval != '') { 
		window.eval(lEval); 
    } 
  } 
  function onChangeEmpresa(){ 
  	var cd_empsa_filtro = $("[name='CD_EMPSA']"); 
  	if(cd_empsa_filtro.length > 0 ){ 
   		var cd_empsa = $.map(cd_empsa_filtro, function(val,index) { return val.value; }).join(', ');  		setWhereRICSD_FILTRO("ST_RICSD = 'A' AND (CD_RICSD IN (SELECT CD_RICSD FROM EMPRS WHERE EMPRS.CD_EMPSA in ( "+cd_empsa+" ) ) OR CD_RICSD NOT IN (SELECT CD_RICSD FROM EMPRS))"); 
  		setWhereACAO_FILTRO("(EXISTS (SELECT 1 FROM EMPAC WHERE CD_EMPSA in ( "+cd_empsa+" ) AND EMPAC.CD_ACAO = ACAO.CD_ACAO) OR CD_ACAO NOT IN (SELECT CD_ACAO FROM EMPAC))"); 
  		setWherePSSOA_GTR("TP_PSSOA = 'U' AND ST_PSSOA = 'A' AND exists (SELECT 1 FROM PMSEG where CD_PRFAC = pssoa.cd_prfac AND cd_fnseg = 'gtr_clientes') AND PSSOA.CD_PSSOA in (SELECT p.CD_PSSOA FROM PSSOA p LEFT JOIN EMPPS on EMPPS.CD_PSSOA = p.CD_PSSOA where EMPPS.CD_EMPSA in ( "+cd_empsa+" ) OR EMPPS.CD_EMPSA is null and p.NM_PSSOA is not null)");		setWhereGRUPO("(EXISTS (SELECT 1 FROM EMPGP WHERE EMPGP.CD_EMPSA in ( " +cd_empsa+ " ) AND EMPGP.CD_GRUPO = GRUPO.CD_GRUPO) OR CD_GRUPO NOT IN (SELECT CD_GRUPO FROM EMPGP))"); 
		setWhereGRUPO_FILTRO("(EXISTS (SELECT 1 FROM EMPGP WHERE EMPGP.CD_EMPSA in ( " +cd_empsa+ " ) AND EMPGP.CD_GRUPO = GRUPO.CD_GRUPO) OR CD_GRUPO NOT IN (SELECT CD_GRUPO FROM EMPGP))"); 
  		setWhereRICSD_INFO("ST_RICSD = 'A' AND (CD_RICSD IN (SELECT CD_RICSD FROM EMPRS WHERE EMPRS.CD_EMPSA in ( "+cd_empsa+" ) ) OR CD_RICSD NOT IN (SELECT CD_RICSD FROM EMPRS))"); 
  		setWhereACAO("(EXISTS (SELECT 1 FROM EMPAC WHERE CD_EMPSA in ( "+cd_empsa+" ) AND EMPAC.CD_ACAO = ACAO.CD_ACAO) OR CD_ACAO NOT IN (SELECT CD_ACAO FROM EMPAC))"); 
  		setEnable_RICSD_FILTRO(true);  setEnable_ACAO_FILTRO(true); setEnable_PSSOA_GTR(true);  		setEnable_RICSD_INFO(true);  setEnable_ACAO(true); setEnable_GRUPO(true); setEnable_GRUPO_FILTRO(true);  	}else{ 
  		setEnable_RICSD_FILTRO(false);  setEnable_ACAO_FILTRO(false); setEnable_PSSOA_GTR(false);  		setEnable_RICSD_INFO(false);  setEnable_ACAO(false); setEnable_GRUPO(false); setEnable_GRUPO_FILTRO(false);  	}  } 
        function convertData(data) {                var from = data.split('/');                 var f = new Date(from[2], from[1] - 1, from[0]);               return f;         }         function valida12meses(inicio, fim) {                if (inicio > fim ) {                    return false;                }                var date1 = inicio;                var date2 = fim;                var months;                months= (date2.getFullYear() - date1.getFullYear()) * 12;                months-= date1.getMonth() + 1;                months+= date2.getMonth() + 1;                return months <= 0;         }    		function gerarRelatorio(acao){ 
   		    document._frm.controlRICSD.value = controlRICSD; 
   		    document._frm.controlQTNRO.value = controlQTNRO; 
   		    document._frm.controlQUEST.value = controlQUEST; 
   		    document._frm.controlACAO.value = controlACAO; 
   		    document._frm.controlPROSAU.value = controlPROSAU; 
   		    document._frm.controlGRUPO.value = controlGRUPO; 
   		    if (acao  == '') { 
   		    document._frm.acao_rel.value = 'relatorio'; 
   		    } else { 
   		    document._frm.acao_rel.value = acao; 
   		    } 
   		    document._frm.submit(); 
   		} 
   		function validateFiltro(){ 
   			var numColDadosBasicos = $("input[name='CLENTDADOS']").length; 
   			var numColTiposDocumentos = $("input[name='CLENTTIPODOC']").length; 
   			var numColEspecialidade = $("input[name='CD_ESPMD_SHOW']").length; 
   			var numColQuestionario = $("input[name='QTNRO_INFO_CD_QTNRO']").length; 
   			var numColQuestao = $("input[name='CD_QUEST_SHOW']").length; 
   			var numColRisco = $("input[name='CD_RICSD_SHOW']").length; 
   			var numColAcao = $("input[name='CD_ACAO_SHOW']").length; 
   			var numColGrupo = $("input[name='CD_GRUPO_SHOW']").length; 
   			var numColTotal = 2 + numColDadosBasicos + numColTiposDocumentos + numColEspecialidade + 
   				(numColQuestao > 0 ? numColQuestao : numColQuestionario) + numColRisco + numColAcao + numColGrupo; 
   			if (numColTotal > 50 ) { 
   				alert(getString('numero_maximo_colunas_excedido_maximo_%s_atual_%s',50, numColTotal)); 
   				return; 
   			} 
  			var empresa = document.getElementById('_EMPSA_FILTRO_NM_EMPSA'); 
			var cd_empsa_filtro = $("[name='CD_EMPSA']"); 
            var mensagem = document.getElementById('mensagem'); 
            var mensagem_focus = document.getElementById('mensagem_focus'); 
  			var marca_statuspa = document.getElementById('marca_statuspa'); 
  			var marca_empresa = document.getElementById('marca_empresa'); 
  			var marca_ricsco_exib = document.getElementById('marca_risco_exib'); 
  			var marca_questao_exib = document.getElementById('marca_questao_exib'); 
            var marca_reg_cliente = document.getElementById('marca_reg_cliente'); 
            var marca_reg_medicao_risco = document.getElementById('marca_reg_medicao_risco'); 
            var marca_reg_resposta = document.getElementById('marca_reg_resposta'); 
            var marca_exec_prev_acao = document.getElementById('marca_exec_prev_acao'); 
            var marca_sessao_grupo = document.getElementById('marca_sessao_grupo'); 
            var dtIniRegCliente  = document.getElementById('dtIniRegCliente_dt'); 
            var dtFimRegCliente  = document.getElementById('dtFimRegCliente_dt'); 
            var dtIniRegMedicaoRisco  = document.getElementById('dtIniRegMedicaoRisco_dt'); 
            var dtFimRegMedicaoRisco  = document.getElementById('dtFimRegMedicaoRisco_dt'); 
            var dtIniRegResposta  = document.getElementById('dtIniRegResposta_dt'); 
            var dtFimRegResposta  = document.getElementById('dtFimRegResposta_dt'); 
            var dtIniExecPrevAcao  = document.getElementById('dtIniExecPrevAcao_dt'); 
            var dtFimExecPrevAcao  = document.getElementById('dtFimExecPrevAcao_dt'); 
            var dtIniSessaoGrupo  = document.getElementById('dtIniSessaoGrupo_dt'); 
            var dtFimSessaoGrupo  = document.getElementById('dtFimSessaoGrupo_dt'); 
            dtIniRegCliente.style.border = '1px solid silver';
            dtFimRegCliente.style.border = '1px solid silver';
            dtIniRegMedicaoRisco.style.border = '1px solid silver';
            dtFimRegMedicaoRisco.style.border = '1px solid silver';
            dtIniRegResposta.style.border = '1px solid silver';
            dtFimRegResposta.style.border = '1px solid silver';
            dtIniExecPrevAcao.style.border = '1px solid silver';
            dtFimExecPrevAcao.style.border = '1px solid silver';
            dtIniSessaoGrupo.style.border = '1px solid silver';
            dtFimSessaoGrupo.style.border = '1px solid silver';
  			var marca_ricsco = document.getElementById('marca_risco'); 
  			var marca_qtnro = document.getElementById('marca_qtnro'); 
  			var marca_questao = document.getElementById('marca_questao'); 
  			var marca_acao = document.getElementById('marca_acao'); 
  			var marca_profissional = document.getElementById('marca_profissional'); 
  			var marca_grupo = document.getElementById('marca_grupo'); 
  			marca_statuspa.style.display = 'none'; 
  			marca_ricsco.style.display = 'none'; 
  			marca_qtnro.style.display = 'none'; 
  			marca_questao.style.display = 'none'; 
  			marca_acao.style.display = 'none'; 
  			marca_profissional.style.display = 'none'; 
  			marca_grupo.style.display = 'none'; 
            marca_reg_cliente.style.display = 'none'; 
            marca_reg_medicao_risco.style.display = 'none'; 
            marca_reg_resposta.style.display = 'none'; 
            marca_exec_prev_acao.style.display = 'none'; 
            marca_sessao_grupo.style.display = 'none'; 
  			marca_statuspa.title = ''; 
  			marca_ricsco.title = ''; 
  			marca_qtnro.title = ''; 
  			marca_questao.title = ''; 
  			marca_acao.title = ''; 
  			marca_profissional.title = ''; 
  			marca_grupo.title = ''; 
            marca_reg_cliente.title = ''; 
            marca_reg_medicao_risco.title = ''; 
            marca_reg_resposta.title = ''; 
            marca_exec_prev_acao.title = ''; 
            marca_sessao_grupo.title = ''; 
   			var valida = true; 
  			if ($('#opStatusPA').val() != '' && $('#opStatusPA').val() != 'S') {   			if (!$('input[name="chkStatusPA"]').is(':checked')) {    			marca_statuspa.style.display = '';   			marca_statuspa.title = 'Selecione Status do Plano de Ação';  			valida = false;   			}   			}   			if ($('input[name="chkStatusPA"]').is(':checked')) {   			if ($('#opStatusPA').val() == '') {    			marca_statuspa.style.display = '';   			marca_statuspa.title = 'Selecione Status do Plano de Ação';  			valida = false;   			}   			}    			var medicao = document.getElementsByName('MEDICAO_QUEST'); 
   			for(i = 0; i < medicao.length; i++){ 
   				if(medicao[i].selectedIndex == 0){ 
   					medicao[i].style.borderColor = 'red'; 
   					marca_questao_exib.style.display = '';   					marca_questao_exib.title = 'Selecione o tipo de Medicação';   					valida = false; 
   				} 
   			} 
   			if(cd_empsa_filtro.length < 1){   				empresa.style.borderColor = 'red'; 
   				marca_empresa.style.display = '';   				marca_empresa.title = 'Selecione uma empresa';   				valida = false; 
   			}   			medicao = document.getElementsByName('MEDICAO_RICSD'); 
   			for(i = 0; i < medicao.length; i++){ 
   				if(medicao[i].selectedIndex == 0){ 
   					medicao[i].style.borderColor = 'red'; 
   					marca_risco_exib.style.display = '';   					marca_risco_exib.title = 'Selecione o tipo de Medicação';   					valida = false; 
   				} 
   			} 
   			if(!verificaAgrupadores('RICSD', controlRICSD)){ 
  				marca_ricsco.style.display = ''; 
  				marca_ricsco.title = 'Quantidade de abertura e fechamento de parenteses não está correta. \n';   				valida = false; 
   			} 
   			if(!verificaAgrupadores('QTNRO', controlQTNRO)){ 
  				marca_qtnro.style.display = ''; 
  				marca_qtnro.title = 'Quantidade de abertura e fechamento de parenteses não está correta. \n';   				valida = false; 
   			} 
   			if(!verificaAgrupadores('QUEST', controlQUEST)){ 
  				marca_questao.style.display = ''; 
  				marca_questao.title = 'Quantidade de abertura e fechamento de parenteses não está correta. \n';   				valida = false; 
   			} 
   			if(!verificaAgrupadores('ACAO', controlACAO)){ 
  				marca_acao.style.display = ''; 
  				marca_acao.title = 'Quantidade de abertura e fechamento de parenteses não está correta. \n';   				valida = false; 
   			} 
   			if(!verificaAgrupadores('GRUPO', controlGRUPO)){ 
  				marca_grupo.style.display = ''; 
  				marca_grupo.title = 'Quantidade de abertura e fechamento de parenteses não está correta. \n';   				valida = false; 
   			} 
   			if(!verificaAgrupadores('ESPMD', controlPROSAU)){ 
  				marca_profissional.style.display = ''; 
  				marca_profissional.title = 'Quantidade de abertura e fechamento de parenteses não está correta. \n';   				valida = false; 
   			} 
   			if(!verificaConectores('RICSD', controlRICSD)){ 
  				marca_ricsco.style.display = ''; 
  				marca_ricsco.title += 'Nem todos os conectores logicos foram selecionados. \n';   				valida = false; 
   			} 
   			if(!verificaConectores('QTNRO', controlQTNRO)){ 
  				marca_qtnro.style.display = ''; 
  				marca_qtnro.title += 'Nem todos os conectores logicos foram selecionados. \n';   				valida = false; 
   			} 
   			if(!verificaConectores('QUEST', controlQUEST)){ 
  				marca_questao.style.display = ''; 
  				marca_questao.title += 'Nem todos os conectores logicos foram selecionados. \n';   				valida = false; 
   			} 
   			if(!verificaConectores('ACAO', controlACAO)){ 
  				marca_acao.style.display = ''; 
  				marca_acao.title += 'Nem todos os conectores logicos foram selecionados. \n';   				valida = false; 
   			} 
   			if(!verificaConectores('GRUPO', controlGRUPO)){ 
  				marca_grupo.style.display = ''; 
  				marca_grupo.title += 'Nem todos os conectores logicos foram selecionados. \n';   				valida = false; 
   			} 
   			if(!verificaConectores('ESPMD', controlPROSAU)){ 
  				marca_profissional.style.display = ''; 
  				marca_profissional.title += 'Nem todos os conectores logicos foram selecionados. \n';   				valida = false; 
   			} 
   			if(!verificaElementos('RICSD', controlRICSD, 'COMP')){  				marca_ricsco.style.display = ''; 
  				marca_ricsco.title += 'Selecionar operador de comparação. \n';   				valida = false; 
   			}   			if(!verificaElementos('QUEST', controlQUEST, 'COMP')){  				marca_questao.style.display = ''; 
  				marca_questao.title += 'Selecionar operador de comparação. \n';   				valida = false; 
   			}   			if(!verificaElementos('ACAO', controlACAO, 'COMP')){  				marca_acao.style.display = ''; 
  				marca_acao.title += 'Selecionar operador de comparação. \n';   				valida = false; 
   			}   			if(!verificaElementos('GRUPO', controlGRUPO, 'COMP')){  				marca_grupo.style.display = ''; 
  				marca_grupo.title += 'Selecionar operador de comparação. \n';   				valida = false; 
   			}   			if(!verificaElementos('RICSD', controlRICSD, 'OPT')){  				marca_ricsco.style.display = ''; 
  				marca_ricsco.title += '<label class=missing_translation>#selecionar_nivel_de_risco#</label> \n';   				valida = false; 
   			}   			if(!verificaElementos('QUEST', controlQUEST, 'RESP')){  				marca_questao.style.display = ''; 
  				marca_questao.title += 'Informe a resposta da questão \n';   				valida = false; 
   			}   			if(!verificaElementos('QUEST', controlQUEST, 'RESP_dt')){  				marca_questao.style.display = ''; 
  				marca_questao.title += 'Informe a resposta da questão \n';   				valida = false; 
   			}   			if(!verificaElementos('QUEST', controlQUEST, 'RESP_TIPO')){  				marca_questao.style.display = ''; 
  				marca_questao.title += '<label class=missing_translation>#informe_o_tipo_de_valor#</label> \n';   				valida = false; 
   			}   			if(!verificaElementos('ACAO', controlACAO, 'PERCT')){  				marca_acao.style.display = ''; 
  				marca_acao.title += 'Informe o porcentual da ação \n';   				valida = false; 
   			}   			if(!verificaElementos('ESPMD', controlPROSAU, 'OPT_NM_PSSOA')){  				marca_profissional.style.display = ''; 
  				marca_profissional.title += 'Selecione o profissioal da Saúde.. \n';   				valida = false; 
   			}   			return valida; 
   		} 
   		function verificaAgrupadores(type, control){ 
   			var agrp; 
   			var quant = 0; 
   			for(i = 1; i < control; i++){ 
   				agrp = document.getElementsByName(type+'_'+i+'_AGP1')[0]; 
   				if(agrp){ 
   					if(agrp.value != ''){ 
   						quant+=agrp.value.length; 
   					} 
   				} 
   			} 
   			for(i = 0; i < control; i++){ 
   				agrp = document.getElementsByName(type+'_'+i+'_AGP2')[0]; 
   				if(agrp){ 
   					if(agrp.value != ''){ 
   						quant-= agrp.value.length; 
   					} 
   				} 
   			} 
   			return (quant == 0); 
   		} 
   		function verificaElementos(type, control, elem){ 
   			var comp; 
   			var valida = true;   			for(i = 1; i < control; i++){ 
   				comp = document.getElementsByName(type+'_'+i+'_'+elem)[0]; 
   				if(comp){ 
   					if((comp.tagName == 'SELECT' && comp.selectedIndex == 0) || (comp.tagName == 'INPUT' && comp.value == '')){ 
   						comp.style.borderColor = 'red'; 
   						valida = false;   					}else{ 
   						comp.style.borderColor = ''; 
   					} 
   				} 
   			}   			return valida;   		}   		function verificaConectores(type, control){ 
   			var selecionado = 0; 
   			var quant = 0; 
   			var isFirst = true; 
   			for(i = 1; i < control; i++){ 
   				conec = document.getElementsByName(type+'_'+i+'_CONEC')[0]; 
   				if(conec){ 
   					quant++;   					if(isFirst){ 
   						isFirst = false; 
   					}else{ 
   						if(conec.selectedIndex > 0){ 
   							selecionado++; 
   						}else{ 
   							conec.style.borderColor = 'red'; 
   						}   					}
   				} 
   			} 
   			if(quant > 0){ 
   				return ((quant-1) == selecionado); 
   			}else{ 
   				return true; 
   			} 
   		} 
	 	function afterFill(nm_element, cd_element, field, table, medicao, avoidAlert) { 
	 		var possui = false; 
	 		var elements = document.getElementsByName(field); 
	 		for(i = 0; i < elements.length && !possui; i++){ 
	 			if(elements[i].value == cd_element){ 
	 				possui = true; 
	 			} 
	 		} 
	 		if(!possui){ 
	 		     var classe = medicao != null?  'field-report-small' : 'field-report-large'; 
	 		     var table_colunas = document.getElementById(table); 
	 		     var row = table_colunas.insertRow(-1); 
	 		     var cell = row.insertCell(-1); 
	 		     cell.innerHTML = '<input type="text" readonly class="'+classe+'" value="'+nm_element+'">' 									+ '<input type="hidden" name="'+field+'" value='+cd_element+'>' 								    + (medicao != null?'<select name="'+medicao+'" class="'+classe+'">' 								  + 	'<option value=0>::Medições::</option>'  								  + 	'<option value=1>Primeira</option>'  								  + 	'<option value=2>Última</option>'  								  + 	'<option value=3>Primeira e Última</option>'  								  + 	'<option value=4>Penúltima e Última</option>'  								  + 	'<option value=5>Todas</option>'  									  		  + '</select>':''); 	 		     cell = row.insertCell(-1); 
	 		     cell.innerHTML = '<img src="pics/ico_excluir.gif" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);showHideColunasAddQuest_GERAL();" title="Excluir">'; 
	 		     _limpa_campos_RICSD_INFO(); 
	 		} else if (!avoidAlert) { 
	 			alert('Esse item já foi adicionado.'); 
	 		} 
	 	} 
	 	function afterFillRICSD_INFO(){ 
	 		var cd_ricsd = document.getElementById('_RICSD_INFO_CD_RICSD').value; 
	 		var nm_risco = document.getElementById('_RICSD_INFO_NM_RICSD').value; 
	 		afterFill(nm_risco, cd_ricsd, 'CD_RICSD_SHOW', 'colunasAddRisco', 'MEDICAO_RICSD'); 
	 		_limpa_campos_RICSD_INFO(); 
	 	} 
	 	function afterFillACAO(){ 
	 		var cd_acao = document.getElementById('_ACAO_CD_ACAO').value; 
	 		var nm_acao = document.getElementById('_ACAO_NM_ACAO').value; 
	 		afterFill(nm_acao, cd_acao, 'CD_ACAO_SHOW', 'colunasAddAcao'); 
	 		_limpa_campos_ACAO(); 
	 	} 
	 	function afterFillTMGRP(){ 
	 		var cd_tmgrp = document.getElementById('_TMGRP_CD_TMGRP').value; 
	 		setWhereGRUPO_FILTRO('CD_TMGRP = ' + cd_tmgrp); 
	 		var table = document.getElementById('tableFilterGrupo'); 
	 		var i = 0; 
	 		for(i = table.rows.length; i > 1; i--){ 
	 		  table.deleteRow(i-1);  
	 		} 
	 	} 
	 	function afterCleanTMGRP(){ 
	 		setWhereGRUPO_FILTRO(''); 
	 	} 
	 	function afterFillGRUPO(){ 
	 		var cd_grupo = document.getElementById('_GRUPO_CD_GRUPO').value; 
	 		var ds_grupo = document.getElementById('_GRUPO_DS_GRUPO').value; 
	 		afterFill(ds_grupo, cd_grupo, 'CD_GRUPO_SHOW', 'colunasAddGrupo'); 
	 		_limpa_campos_GRUPO(); 
	 	} 
	 	function afterFillQTNRO_INFO(){ 
	 		if(confirm('Deseja adicionar todas as questões do questionário?')){ 
	 			var cd_qtnro = document.getElementById('_QTNRO_INFO_CD_QTNRO').value; 
	 			var nm_qtnro = document.getElementById('_QTNRO_INFO_NM_QTNRO').value; 
	 			lURL = 'cajax?tipo=listQuestoesQtnro&CD_QTNRO='+cd_qtnro; 
	 			makeRequest('colunasAddQuest', lURL, null, returnAjax); 
	 		} 
	 	} 
	 	function afterFillQUEST_INFO(){ 
	 		var cd_quest = document.getElementById('_QUEST_INFO_CD_QUEST').value; 
	 		var nm_quest = document.getElementById('_QUEST_INFO_NM_QUEST').value; 
	 		afterFill(nm_quest, cd_quest, 'CD_QUEST_SHOW', 'colunasAddQuest', 'MEDICAO_QUEST'); 
	 		_limpa_campos_QUEST_INFO(); 
	 		showHideColunasAddQuest_GERAL(); 
	 	} 
	 	function showHideColunasAddQuest_GERAL() { 
	 		if($('select[name="MEDICAO_QUEST"]').length < 1){ 
	 			$('#colunasAddQuest_GERAL').hide(); 
                $('#dataHoraRel').hide(); 
	 		} else { 
	 			$('#colunasAddQuest_GERAL').show(); 
                if($('#dataHoraRel').is(':hidden')){ 
	 		    	$('#dataHoraRel').show(); 
					$('#chkExibirDataHora').prop('checked',true); 
	 		    } 
	 		} 
	 	} 
	 	function alterarValoresMEDICAO_QUEST(pValue) { 
	 		$('select[name="MEDICAO_QUEST"]').val(pValue); 
	 	} 
	 	function afterFillESPMD_INFO(){ 
	 		var cd_espmd = document.getElementById('_ESPMD_INFO_CD_ESPMD').value; 
	 		var nm_espmd = document.getElementById('_ESPMD_INFO_NM_ESPMD').value; 
	 		afterFill(nm_espmd, cd_espmd, 'CD_ESPMD_SHOW', 'colunasAddEspecialidade', null); 
	 		_limpa_campos_ESPMD_INFO(); 
	 	} 
	 	function afterFillPSSOA_GTR(){ 
	 		var cd_pssoa = document.getElementById('_PSSOA_GTR_CD_PSSOA').value; 
	 		var nm_pssoa = document.getElementById('_PSSOA_GTR_NM_PSSOA').value; 
	 		afterFill(nm_pssoa, cd_pssoa, 'CD_PSSOA_GTR_FILTRO', 'filtroAddGestor', null); 
	 		_limpa_campos_PSSOA_GTR(); 
	 	} 
	 	function afterFillEMPSA_FILTRO(){ 
	 		var cd_empsa = document.getElementById('_EMPSA_FILTRO_CD_EMPSA').value; 
	 		var nm_empsa = document.getElementById('_EMPSA_FILTRO_NM_EMPSA').value; 
			makeRequest('afterFillEMPSA_FILTRO', 'cajax?bloco=3&tipo=afterFillEMPSA_FILTRO&CD_EMPSA=' + cd_empsa + '&NM_EMPSA=' + nm_empsa, null, doAjax);	 	} 
	 	function afterFillPSSOA_REG_RESPC() { 
	 		var cd_pssoa = document.getElementById('_PSSOA_REG_RESPC_CD_PSSOA').value; 
	 		var nm_pssoa = document.getElementById('_PSSOA_REG_RESPC_NM_PSSOA').value; 
	 		afterFill(nm_pssoa, cd_pssoa, 'CD_PSSOA_REG_FILTRO', 'filtroAddPssoaReg', null); 
	 		_limpa_campos_PSSOA_REG_RESPC(); 
	 	} 
		function todasEmpresas() {			document.getElementById('ico-add-all').style.display = 'none';			document.getElementById('ico-load-all').style.display = '';			makeRequest('todasEmpresas', 'cajax?bloco=3&tipo=todasEmpresasRelDinam&hmhm_empresasPossiveis=', null, returnAjax);		}	 	function addDadosCliente(){ 
	 		  var select = document.getElementById('opcoesDadosCliente'); 
	 		  if(select.selectedIndex > 0){ 
	 		     var cod = select[select.selectedIndex].value; 
	 		     var nm = select[select.selectedIndex].innerHTML; 
	 		     if(cod != ''){ 
	 		        afterFill(nm, cod, 'CLENTDADOS', 'colunasAddDadosCliente'); 
	 		     } 
	 		   } 
	 	} 
	 	function addTiposDocumento(){ 
	 		  var select = document.getElementById('opcoesTipoDocumento'); 
	 		  if(select.selectedIndex > 0){ 
	 		     var cod = select[select.selectedIndex].value; 
	 		     var nm = select[select.selectedIndex].innerHTML; 
	 		     if(cod != ''){ 
	 		        afterFill(nm, cod, 'CLENTTIPODOC', 'colunasAddTiposDocumento'); 
	 		     } 
	 		   } 
	 	} 
	 	function ajaxPages(page) {
	 		document._frm.action = 'creldinamdesc';	 		document._frm.tipo_rel.value = 'ajax';	 		document._frm.target = 'printFrame';            document._frm.reportPage.value = page;            Carregando();	 		gerarRelatorio(); 
	 	} 
	 	function excelExport(){ 
	 		document._frm.form_hashfiltros.value =  $('#hashfiltros').val(); 
            if(validaRelatorio() == 0) { 	 		createLoadingBox('402b1211-5495-44b3-9cf3-b68071614594', true);	 		document._frm.action = 'creldinamdesc';	 		document._frm.tipo_rel.value = 'excel'; 
	 		gerarRelatorio(); 
			} 	 	} 
	 	function print(){ 
	 		document._frm.action = 'creldinamdesc';	 		document._frm.tipo_rel.value = 'print'; 
	 		document._frm.target = 'printFrame';	 		gerarRelatorio(); 
	 	} 
	 	function geraRel(){ 
   			if(validateFiltro()){ 
	 			createLoadingBox('402b1211-5495-44b3-9cf3-b68071614594', true);	 			document._frm.action = 'creldinamdesc';	 			document._frm.tipo_rel.value = 'html'; 
	 			document._frm.target = '';				document._frm.reportPage.value = 1;	 			gerarRelatorio(); 
   			}else{ 
   			 	alert('Alguns erros foram encontrados, passe o cursor sobre o asterisco (*) vermelho para ver o erro.');   			}	 	} 
function requisicoesExportacao() {  document.location.href = 'display?funcao=adm_report_request'}function frame_filtro(){	 open_filtros(''); 
	 document._frm.action = 'ccadrelcu?acao=ins';	 document._frm.target = 'filtros';	 gerarRelatorio();}function showTitular(pShow){ 
	var divTITLR = document.getElementById('_div_titular'); 
    var divTITFN = document.getElementById('_div_titularfn'); 
	var CD_PSSOA_TITLR = document.getElementById('_PSSOA_TITLR_CD_PSSOA').value; 
	if(pShow){ 
		divTITLR.style.display = ''; 
		divTITFN.style.display = ''; 
	} else { 
		divTITLR.style.display = 'none'; 
		divTITFN.style.display = 'none'; 
		_limpa_campos_PSSOA_TITLR(); 
		_limpa_campos_PSSOA_TITFN(); 
	} 
	showParentesco(pShow && CD_PSSOA_TITLR != ''); 
} 
function showParentesco(pShow){ 
	var divPRTSC = document.getElementById('_div_parentesco'); 
	if(pShow){ 
		divPRTSC.style.display = ''; 
	} else { 
		divPRTSC.style.display = 'none'; 
		_limpa_campos_PRTSC(); 
	} 
} 
function afterFillPSSOA_TITLR(){ 
	showParentesco(true); 
} 
function afterCleanPSSOA_TITLR(){ 
	showParentesco(false); 
} 
	 