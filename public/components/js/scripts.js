function  fill_select(data,element){
    tx = "<option value>Seleccione una Opción</option>";
    $.each(data,function(index,val){
        tx += "<option value='"+val.id+"'>"+val.name+"</option>";
    });
    $(element).html(tx);
}

function  fill_selectp(data,element){
    tx = "<option value>Seleccione una Opción</option>";
    $.each(data,function(index,val){
        tx += "<option value='"+val.value+"'>"+val.description+"</option>";
    });
    $(element).html(tx);
}

function getTp(){
    var token = $('input[name=_token]').val();
    var dp_id = $('select[name=department_idp]').val();
    $.ajax({
        type: 'post',
        url: '/api/get-tipe',
        data: {
            '_token': token,
            'dp_id' : dp_id,
        },
        success: function(data){
            fill_selectp(data,'select[name=tipe_institution]');
        }
    });
}


function getIns(){
    var token = $('input[name=_token]').val();
    var dp_id = $('select[name=institutions]').val();
    $.ajax({
        type: 'post',
        url: '/api/get-inst',
        data: {
            '_token': token,
            'dp_id' : dp_id,
        },
        success: function(data){
            fill_selectp(data,'select[name=seats]');
        }
    });
}