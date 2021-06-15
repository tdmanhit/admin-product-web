    var id_product = document.getElementById('id_product')
    var name_product = document.getElementById('name_product')
    var number_product = document.getElementById('number_product')
    var select_product = document.getElementById('select_product')
    var date_product = document.getElementById('date_product')
    var note_product = document.getElementById('note_product')
    var coin_product = document.getElementById('coin_product')
    var valueSuccess = true;
    
    if(localStorage.key('product'))
    {
        var products = JSON.parse(localStorage.getItem('product'))
    }else{
        localStorage.setItem('product',JSON.stringify([
            {
                id:'1',
                name: 'giày adidas',
                number:'100',
                date:'2021-06-01',
                coin:'200',
            },
            {
                id:'2',
                name:'áo adidas',
                number:'50',
                date:'2021-06-02',
                coin:'150',
            },
            {
                id:'3',
                name:'áo balenciaga',
                number:'150',
                date:'2021-06-04',
                coin:'499'
            }
        ]))
    }



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
        products.push(
            {
                id:idValue,
                name:nameValue,
                date:dateValue,
                number:numberValue,
                coin:coinValue,
            }
        )
        var dataProduct = JSON.stringify(products)
        localStorage.setItem('product', dataProduct)
        products = JSON.parse(localStorage.getItem('product'))
        renderTabale()
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

function renderTabale(){
    var tablerender = 
    `<tr>
        <th>MÃ SP</th>
        <th>TÊN SP</th>
        <th>SỐ LƯỢNG</th>
        <th>NGÀY NHẬN</th>
        <th>GIÁ SP</th>
    </tr>`
    for( var i = 0;i<products.length;i++)
    {
        tablerender += `<tr>
        <td>${products[i].id}</td>
        <td>${products[i].name}</td>
        <td>${products[i].number}</td>   
        <td>${products[i].date}</td>
        <td>${products[i].coin}</td>
        <td><i class="far fa-caret-square-down"></td>   `
    }
    document.getElementById('bang').innerHTML = tablerender 
}
renderTabale();
