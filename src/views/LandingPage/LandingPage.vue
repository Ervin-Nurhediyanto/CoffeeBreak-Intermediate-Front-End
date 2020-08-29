<template>

    <div class="container-fluid">
        <header class="row pt-md-3 pb-md-3 pt-sm-3 pb-sm-3">
            <div class="col-md-1 col-sm-1 d-flex justify-content-center">
                <img class="icon" src="../../assets/menu.png">
            </div>
            <div class="col-md-11 col-sm-11 d-flex justify-content-center">
                <h4>Coffee Break Cafe</h4>
            </div>
        </header>
        <div class="row pb-md-3 pb-sm-3">
            <nav class="col-md-1 col-sm-1 d-flex justify-content-center">
                <div class="col pl-md-4 pl-sm-0">
                    <img class="icon mt-md-5 mt-sm-5" src="../../assets/fork.png">
                    <img class="icon mt-md-5 mt-sm-5" src="../../assets/clipboard.png">
                    <img class="icon mt-md-5 mt-sm-5" src="../../assets/add.png">
                </div>
            </nav>
            <main class="col-md-11 col-sm-11">
                <div class="row">
                    <div class="col-md-4 p-md-4 col-sm-4 p-sm-4">
                        <h2 class="font-weight-light text-light pb-md-1  pb-sm-1">Mau ngopi enak ga bikin kembung?</h2>
                        <h3 class="text-light pb-md-1 pb-sm-1">Disini solusinya</h3>
                        <h4 class="text-light pb-md-1 pb-sm-1">Kopi pilihan dari biji kopi terbaik</h4>
                        <div class="col mt-md-4 mt-sm-4 p-md-0 p-sm-0 order ">
                            <h4 class="text-white">Buruan pesan sekarang</h4>
                            <div class="col m-md-0 m-sm-0 slide ">
                                <div class="col">
                                    <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Cappucino.jpg">
                                    <h5>Cappucino</h5>
                                </div>
                                <div class="col">
                                    <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Espresso.jpg">
                                    <h5>Espresso</h5>
                                </div>
                                <div class="col">
                                    <img class="image" src="https://raw.githubusercontent.com/Ervin-Nurhediyanto/CoffeeBreak-Cafe-App/master/asset/menu/Cofee%20Latte.jpg">
                                    <h5>Cofee Latte</h5>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center mt-md-4 mt-sm-4">
                                <button class="order">Pesan Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
/* Background Check */

.red {
    background-color: red;
}

.blue {
    background-color: blue;
}

.green {
    background-color: green;
}

.yellow {
    background-color: yellow;
}

/* Image, Text */

.icon {
    width: 35px;
    height: 35px;
}

.image {
    width: 250px;
    height: 180px;
    border-radius: 10px;
}

h3, h4, h5, button, table th, table td {
    font-family: Airbnb Cereal App;
}

h3 {
    font-size: 25px;
    font-weight: bold;
}

h5 {
    font-size: 12px;
    font-weight: bold;
}

/* header */

header {
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

header h4 {
    font-size: 30px;
    line-height: 40px;
    text-shadow: 2px 2px 5px rgba(23, 32, 34, 0.25);
}

/* nav */

nav {
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

/* main */

main {
    background-image: url('https://i.pinimg.com/originals/09/52/e9/0952e9d8c44d9e1fcc1e9b6da06ca49c.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 600px;
}

main .order {
    border-radius: 10px;
}

main .order h4 {
    text-shadow: 2px 2px 5px gray;
    text-align: center;
}

main .order button.order {
    background-color: red;
    border-radius: 20px;
    padding: 10px;
    font-weight: bold;
    width: 150px;
    text-align: center;
    color: beige;
}

main .order button a {
    color: beige;
}

main .slide {
    /* background-color: transparent; */
    overflow-y: scroll;
    height: 220px;
    width: 320px;
}

main .slide::-webkit-scrollbar {
    display: none;
}

main .slide h5 {
    font-size: 20px;
    margin-bottom: 15px;
    color: whitesmoke;
}

@media (max-width: 768px) {
    .icon {
        width: 25px;
        height: 25px;
    }
    .image {
        width: 110px;
        height: 110px;
    }
    main h2 {
        font-size: 20px;
    }
    main h3 {
        font-size: 18px;
    }
    main h4 {
        font-size: 16px;
    }
    main .order h4 {
        font-size: 14px;
    }
    main .slide h5 {
        font-size: 16px;
    }
    main .order button.order {
        width: 130px;
        font-size: 12px;
    }
}

@media (max-width: 576px) {
    header .col-sm-1 {
        display: flex;
        flex-direction: column;
        width: 20%;
    }
    header .col-sm-11 {
        display: flex;
        flex-direction: column;
        width: 80%;
        padding-top: 10px;
    }
    header h4 {
        font-size: 20px;
    }
    nav.col-sm-1 {
        display: flex;
        flex-direction: row;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 0;
    }
    nav .icon {
        margin-right: 5px;
    }
    main {
        /* background-size: auto 100%; */
        padding: 10px;
    }
    main .col-sm-4 {
        width: 60%;
        margin-bottom: 20px;
    }
    main .slide {
        height: 130px;
        width: 320px;
        /* margin-bottom: 20px; */
    }
    main .order {
        margin-top: 30px;
    }
}
</style>
