function getRequieriments(){
    var t = $('input[name=_token]').val();
    var iT = $('select[name=idTramite]').val();
    var tx = '';
    $.ajax({
        type: 'post',
        url: '/get-requeriments',
        data: {
            '_token': t,
            'iT' : iT,
        },
        success: function(data){
            $.each(data,function(index,val){
                tx +=   "<tr>";
                tx +=       '<td class="center-aling">';
                tx +=           '<label class="b-contain">';
                tx +=               '<input type="checkbox" name="requisitoSolicitud[]" value="'+val.idRequisito+'" checked>';
                tx +=               '<div class="b-input"></div>';
                tx +=           '</label>';
                tx +=       '</td>';
                tx +=       '<td>';
                tx +=        val.nombreRequisito;
                tx +=       '</td>';
                tx +=  "</tr>";
            });
            $('#requerimentsfill').html(tx);
        }
    });

}

function refreshDep(){
    var t = $('input[name=_token]').val();
    var iP = $('select[name=nacPais]').val();
    if(iP =='1'){
        $('select[name=nacDepartamento]').prop('disabled', false);
    }else{
        $('select[name=nacDepartamento]').prop('disabled', true);
        $('select[name=nacDepartamento]').val('');
    }
}


function getCareers(){
    var t = $('input[name=_token]').val();
    var iCe = $('select[name=idCasaEstudio]').val();
    var tx = '';
    $.ajax({
        type: 'post',
        url: '/get-careers',
        data: {
            '_token': t,
            'ice' : iCe,
        },
        success: function(data){
            tx += '<option disabled selected>--selecione una carrera--</option>';
            $.each(data,function(index,val){
                tx += '<option value="'+val.idCarrera+'">'+val.nombreCarrera+' ['+ val.grado.nombreGradoAcademico+']</option>';
            });
            $('#idCarrera').html(tx);
        }
    });

}

function getDelay(){
    var r = Math.random();
    var t = r + '';
    t = t.substring(9,6);
    return parseInt(t);
}

function fnPr(){
    toastr.success();
    return false;
}
/**
 *
    setTimeout(function() {
        toastr.success('retrasado');
    }, getDelay());
 */

function searchEngine(){
    var ge = $('select[name=gestion]').val();
    var nt = $('input[name=numeroTramite]').val();
    var ns = $('input[name=nombreSolicitante]').val();
    var as = $('input[name=apellidoSolicitante]').val();
    var cs = $('input[name=carnetSolicitante]').val();
    var ca = $('input[name=carton]').val();
    if(nt.length<1){
        nt = '-';
    }
    if(ns.length<1){
        ns = '-';
    }
    if(as.length<1){
        as = '-';
    }
    if(cs.length<1){
        cs = '-';
    }
    if(ca.length<1){
        ca = '-';
    }
    var urll = '/'+ge+'/'+nt+'/'+ns+'/'+as+'/'+cs+'/'+ca;
    window.location.replace('/solicitude-search'+urll);
}


function subMainForm(){
    if (confirm('Desea realizar el registro?')) {
        document.getElementById('solicitud').submit();
    }
}

function cargarDatos(){
    $('#submit-btn').prop('disabled', true);
    $('#show-message').html('<strong>Buscando Tramites Similares por nombre y número de carnet</strong>');
    var c = 0;
    var tt = '';
    var ns = $('input[name=nombreSolicitante]').val();
    var as = $('input[name=apellidoSolicitante]').val();
    var cs = $('input[name=carnetSolicitante]').val();
    var it = $('select[name=idTramite]').val();
    var sx = $('select[name=sexo]').val();
    var fn = $('input[name=fec_nac]').val();
    var dm = $('input[name=domicilio]').val();
    var tf = $('input[name=telefono]').val();
    var ce = $('select[name=idCasaEstudio]').val();
    var ca = $('select[name=idCarrera]').val();

    if(it == ''){c++;tt+="* El campo '<strong>Tipo de tramite</strong>' es obligatorio <br>";}
    if(ns == ''){c++;tt+="* El campo '<strong>Nombre(s)</strong>' es obligatorio <br>";}
    if(as == ''){c++;tt+="* El campo '<strong>Apellido(s)</strong>' es obligatorio <br>";}
    if(cs == ''){c++;tt+="* El campo '<strong>Carnet</strong>' es obligatorio <br>";}
    if(sx == ''){c++;tt+="* El campo '<strong>Sexo</strong>' es obligatorio <br>";}
    if(fn == ''){c++;tt+="* El campo '<strong>Fecha de nacimiento</strong>' es obligatorio <br>";}
    if(dm == ''){c++;tt+="* El campo '<strong>Domicilio</strong>' es obligatorio <br>";}
    if(tf == ''){c++;tt+="* El campo '<strong>Telefono/Celular</strong>' es obligatorio <br>";}
    if(ce == ''){c++;tt+="* El campo '<strong>Universidad</strong>' es obligatorio <br>";}
    if(ca == ''){c++;tt+="* El campo '<strong>Carrera</strong>' es obligatorio <br>";}

    if(c>0){
        var tl = '<tr><td colspan="5" class="text-justify"> <div class="alert alert-warning alert-dismissible"><h5><i class="icon fas fa-exclamation-triangle"></i> Atencion!</h5>' +tt+'</div> </td></tr>';
        $('#response-query').html(tl);
        $('#result-query').html('');
        return false;
    }else{
        $('#response-query').html('');
        $('#result-query').html('<tr><td colspan="5" class="text-center"><div class="lds-ellipsis"><div></div><div></div><div></div></td></tr>');
    }
    var t = $('input[name=_token]').val();
    $.ajax({
        type: 'post',
        url: '/get-search',
        data: {
            '_token': t,
            'ns' : ns,
            'as' : as,
            'cs' : cs,
        },
        success: function(data){
            switch (data) {
                case '0':
                    $('#show-message').html('<strong class="text-success"> (0) Trámites similares encontrados, para continuar con el registro haga click en CONTINUAR, para cancelar el registro haga click en CANCELAR</strong>');
                    $('#result-query').html('<tr><td colspan="5" class="text-center"><div class="success-checkmark"><div class="check-icon"><span class="icon-line line-tip"></span><span class="icon-line line-long"></span><div class="icon-circle"></div><div class="icon-fix"></div></div></div></td></tr>');
                    $('#submit-btn').prop('disabled', false);
                    return false;
                    break;
                case '1':
                    toastr.error('Formulario incompleto');
                    $('#show-message').html('<strong class="text-danger"> Atención debe completar la informacion basica para continuar</strong>');
                    return false;
                    break;
                default:
                    break;
            }
            var tx = '';
            $.each(data,function(index,val){
                tx += '<tr>';
                tx +=   '<td>'+val.numeroTramite+'</td>';
                tx +=   '<td>'+val.nombreSolicitante+' '+val.apellidoSolicitante+'</td>';
                tx +=   '<td>'+val.carnetSolicitante+'</td>';
                tx +=   '<td>'+val.idCarrera+'</td>';
                tx +=   '<td>'+val.estado+'</td>';
                tx += '</tr>';
            });
            $('#result-query').html(tx);
            $('#show-message').html('<strong class="text-warning"> ('+data.length+') Trámites similares encontrados, para continuar con el registro haga click en CONTINUAR, para cancelar el registro haga click en CANCELAR</strong>');
            $('#submit-btn').prop('disabled', false);
        },
        error: function(data){
            toastr.error('Error al ejecutar Ajax: '+data);
        }
    });
}


function anires(){
    $(".check-icon").hide();
    setTimeout(function () {
      $(".check-icon").show();
    }, 10);
}

function rke(e) {
    ke = (document.all) ? e.keyCode : e.which;
    if (ke==13) {
        var nc = $('input[name=carnet]').val();
        var fn = $('input[name=fec_nac]').val();
        if(nc != '' && fn != '' || nt != ''&& nc != ''){
            toastr.success('esta completo');
            //buscamos por numero de carnet y fecha de nacimiento
        }else{
            var nt = $('input[name=tramite]').val();
            if(nt != ''){
                toastr.success('esta completo');
                //buscamos por numero de tramite y numero de carnet
            }else{
                //debemos completar el formulario para q se envie
                toastr.success('no esta completo');
                return false;
            }
        }
        document.formulario1.submit();
    }
}


function getSolicitudeInfo(){
    toastr.error('Generando consulta');
}



function searchEngine(){
    var ge = $('select[name=year]').val();
    var nt = $('input[name=code]').val();
    var ns = $('input[name=nameSol]').val();
    var ps = $('input[name=surnameSol]').val();
    var ms = $('input[name=lastnameSol]').val();
    var cs = $('input[name=dniSol]').val();
    var ca = $('input[name=carton]').val();
    if(nt.length<1){
        nt = '-';
    }
    if(ns.length<1){
        ns = '-';
    }
    if(ps.length<1){
        ps = '-';
    }
    if(ms.length<1){
        ms = '-';
    }
    if(cs.length<1){
        cs = '-';
    }
    if(ca.length<1){
        ca = '-';
    }
    var urll = '/'+ge+'/'+nt+'/'+ns+'/'+ps+'/'+ms+'/'+cs+'/'+ca;
    window.location.replace('/solicitude-search'+urll);
}

function searchEngineStep(){
    var cs = $('input[name=dniSol]').val();
    var pcs = $('input[name=perCodSol]').val();
    var pr = $('input[name=proce]').val();
    var st = $('input[name=step]').val();
    if(cs.length<1){
        cs = '-';
    }
    if(pcs.length<1){
        pcs = '-';
    }
    var urll = '/'+pr+'/'+st+'/'+cs+'/'+pcs;
    window.location.replace('/solicitude-search-step'+urll);
}


function refreshDataMod(id){
    var t = $('input[name=_token]').val();
    $.ajax({
        type: 'post',
        url: '/get-solicitude',
        data: {
            '_token': t,
            'id' : id,
        },
        success: function(data){
            //cargamos atributos q necesitaremos para mostrar
            $('#nomtramite').html(data.nomtramite);
            $('#nomcompleto').html(data.nomcompleto);
            $('#expedido').html(data.expedido);
            $('#estado').html(data.estado);
            $('#institucion').html(data.institucion);
            $('#titulo').html(data.titulo);
            $('#grado').html(data.grado);
            $('#fec_nac').html(data.fec_nac);
            $('#depNac').html(data.depNac);
            $('#paisNac').html(data.paisNac);

            $('#carnet').html(data.carnet);

            $('#direccion').html(data.adress);
            $('#telefono').html(data.phone);

            $('#gestion').html(data.year);
            $('#ntramite').html(data.code);
            $('#carton').html(data.carton);
            $('#n_res').html(data.n_res);
            $('#fec_res').html(data.fec_res);

            $('#fec_ini').html(data.fec_ini);
            $('#recepcion').html(data.recepcion);
            //$solicitud->recepcion
            $('#pasos').html(data.pasos);
            $('#popUp').modal('show');
        }
    });
}


function searchBySerial(event){
    if(event.keyCode==13){
        var tx = '/find-step/'+$('input[name=serial]').val();
        window.location.href = tx ;
    }
}


function sendForm(formTosend){
    $('#'+formTosend).submit();
}

function sendFormWCF(formTosend){
    if(confirm('¿Confirmar Acción?')){
        $('#'+formTosend).submit();
    }else{
        return false;
    }

}

function searchByDni(event){
    if(event.keyCode==13){
        searchEngineStep();
    }
}

function generateReport(event){
    if(event.keyCode==13){
        sendReportPrint();
    }
}

function generateList(event){
    if(event.keyCode==13){
        addnewElementSol();
    }
}
function sendReportPrint(route) {
    var ini=$('input[name=cartonIni]').val();
    var end=$('input[name=cartonEnd]').val();
    var lim=$('select[name=frec]').val();
    if (ini.length==0) {
        ini = '0';
    }
    if (end.length==0) {
        end = '0';
    }
    if (typeof lim == 'undefined') {
        var tx = '/'+route+'/'+ini+'/'+end;
    }else{
        var tx = '/'+route+'/'+ini+'/'+end+'/'+lim;
    }
    window.location.href = tx ;
}

function killself(objt){
    $('#'+objt).toggleClass('disabled');
}

function getDateText(){
    var fh=$('input[name=fecha]').val();
    var t = $('input[name=_token]').val();
    $.ajax({
        type: 'post',
        url: '/get-date-text',
        data: {
            '_token': t,
            'fh' : fh,
        },
        success: function(data){
            $('#fecha-literal').html(data);
        }
    });
}

function deleteItem(item){
    $("#"+item).remove();
}


function addnewElementSol(){
    var se =$('input[name=serial]').val();
    var t = $('input[name=_token]').val();
    $.ajax({
        type: 'post',
        url: '/get-solicitude',
        data: {
            '_token': t,
            'se' : se,
        },
        success: function(data){
            if(data == '0'){
                toastr.error('No se encontro el dato solicitado');
                return false;
            }
            var con = parseInt($('#con').val());
            con ++;
            var tx =  "<tr id='"+data.serial+"'>";
                tx += "<td>"+con+"</td>";
                tx += "<td>"+data.code+"</td>";
                tx += "<td>"+data.nombreCompleto+"</td>";
                tx += "<td>"+data.carnetCompleto+"</td>";
                tx += "<td>"+data.n_res+"</td>";
                tx += "<td>"+data.institucion+"</td>";
                tx += '<td><button onclick="deleteItem('+"'"+data.serial+"'"+');" class="btn btn-danger btn-sm">x</button></td>';
                tx += "</tr>";
            $('#lista').append(tx);
            $('#con').val(con);
            $('#serial').val('');
        }
    });
}


function addnewElementSol2(){
    var cod =$('input[name=code]').val();
    var t = $('input[name=_token]').val();
    $.ajax({
        type: 'post',
        url: '/get-solicitude-alt',
        data: {
            '_token': t,
            'cod' : cod,
        },
        success: function(data){
            if(data == '0'){
                toastr.error('No se encontro el dato solicitado');
                return false;
            }
            var con = parseInt($('#con').val());
            con ++;
            var tx =  "<tr id='"+data.serial+"'>";
                tx += "<td>"+con+"</td>";
                tx += "<td>"+data.code+"</td>";
                tx += "<td>"+data.nombreCompleto+"</td>";
                tx += "<td>"+data.carnetCompleto+"</td>";
                tx += "<td>"+data.n_res+"</td>";
                tx += "<td>"+data.institucion+"</td>";
                tx += '<td><button onclick="deleteItem('+"'"+data.serial+"'"+');" class="btn btn-danger btn-sm">x</button></td>';
                tx += "</tr>";
            $('#lista').append(tx);
            $('#con').val(con);
            $('#code').val('');
        }
    });
}

