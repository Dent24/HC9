new Vue({
    el: "#restaurant",
    data: {
        datas: null,
    },
    mounted() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET","https://datacenter.taichung.gov.tw/swagger/OpenData/72b2e32b-74e4-4000-b920-7457c54565be",true);
        xhr.send();

        xhr.onload = () => {
            var x = JSON.parse(xhr.responseText);
            this.datas = x;
        }
    },
})