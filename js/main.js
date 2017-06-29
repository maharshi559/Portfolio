
    $(document).ready(function () {
        $( "#logo" ).click(function() {
            $( "#links" ).toggle(300);
        });

        function Rand(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }

        for (var i = 0; i < 25; i++) {
            var randomValue = Rand(0.1,1.3);
            var image= document.getElementsByTagName(img);
            $(img).css('animation-delay',[Rand]);
        }
    })

