<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <button type="button" id="btn">获取</button>

    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script>
        function getCookie(cookie_name) {
            var allcookies = document.cookie;
            var cookie_pos = allcookies.indexOf(cookie_name); //索引的长度

            // 如果找到了索引，就代表cookie存在，
            // 反之，就说明不存在。
            if (cookie_pos != -1) {
                // 把cookie_pos放在值的开始，只要给值加1即可。
                cookie_pos += cookie_name.length + 1; //这里容易出问题，所以请大家参考的时候自己好好研究一下
                var cookie_end = allcookies.indexOf(";", cookie_pos);

                if (cookie_end == -1) {
                    cookie_end = allcookies.length;
                }

                var value = unescape(allcookies.substring(cookie_pos, cookie_end)); //这里就可以得到你想要的cookie的值了。。。
            }
            return value;
        }


        $('#btn').click(function (e) {
            e.preventDefault();
            $.ajax({
                type: "Post",
                url: "/api/v1/user",
                data: {
                    csrfToken: getCookie('csrfToken'),
                },
                dataType: "JSON",
                success: function (response) {
                    console.log(response);
                }
            });
        });
    </script>
</body>

</html>