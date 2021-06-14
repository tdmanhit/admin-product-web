    var id_product = document.getElementById('id_product')
    var name_product = document.getElementById('name_product')
    var number_product = document.getElementById('number_product')
    var select_product = document.getElementById('select_product')
    var date_product = document.getElementById('date_product')
    var note_product = document.getElementById('note_product')
    var coin_product = document.getElementById('coin_product')
    var valueSuccess = true;
    var linkApiProduct = "http://localhost:3000/product"

function setValue() {
    var idValue = id_product.value.trim();
    var nameValue = name_product.value.trim();
    var numberValue = number_product.value.trim();
    var dateValue = date_product.value.trim();
    var coinValue = coin_product.value.trim();
    var selectValue = select_product.value.trim(); 

    if(idValue ==='')
    {
        setError(id_product,'Nhập mã sản phẩm')
        valueSuccess = false;
    }
    else
    {
       setSuccess(id_product);
    }

    if(nameValue ==='')
    {
        setError(name_product,'Nhập tên sản phẩm')
        valueSuccess = false;
    }else {
        setSuccess(name_product);
    }

    if(numberValue ==='')
    {
        setError(number_product,'Nhập số lượng sản phẩm')
        valueSuccess = false;
    }else {
        setSuccess(number_product);
    }

    if(dateValue ==='')
    {
        setError(date_product,'Nhập ngày xử lý sản phẩm')
        valueSuccess = false;
    }else {
        setSuccess(date_product);
    }

    if(coinValue ==='')
    {
        setError(coin_product,'Nhập số tiền sản phẩm')
        valueSuccess = false;
    }else {
        setSuccess(coin_product);
    }

    if(selectValue ==='')
    {
        setError(select_product,'Chọn sản phẩm')
        valueSuccess = false;
    }else {
        setSuccess(select_product);
    }

    if(valueSuccess===true)
    {
        var formData = 
            {
                id:idValue,
                name:nameValue,
                date:dateValue,
                number:numberValue,
                coin:coinValue,
            }
        handerAddProduct(formData)
    }  
}

function setError(input,message) {
    var formInput = input.parentElement;
    var errorMessage = formInput.querySelector('small');
    formInput.className = 'from-add error';
    errorMessage.innerText = message;
}

function setSuccess(input) {
    var formInput = input.parentElement;
    formInput.className = 'from-add success';
}

function renderTabale(products){
    var tablerender = 
    `<tr>
        <th>MÃ SP</th>
        <th>TÊN SP</th>
        <th>SỐ LƯỢNG</th>
        <th>NGÀY NHẬN</th>
        <th>GIÁ SP</th>
    </tr>`
    var htmls = products.map(function(product){
        return ` 
        <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.number}</td>   
        <td>${product.date}</td>
        <td>${product.coin}</td>
        <td><i class="far fa-caret-square-down"></td>
        </tr>`;     
    })
    tablerender = tablerender + htmls;
    document.querySelector('#bang').innerHTML = tablerender 
}

function start()
{
    getProduct(renderTabale)
}

start()

function getProduct(callback){
    fetch(linkApiProduct)
        .then(function(products){
            return products.json()
        })
        .then(callback)
}

function handerAddProduct(data,callback){
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'}
    }
    fetch(linkApiProduct,options)
        .then(function(products){
            products.json()
        })
        .then(callback)
}