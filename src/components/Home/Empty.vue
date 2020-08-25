<template>
  <div class="row list m-md-0 m-sm-0">
    <div class="col">
      <div class="row p-md-3 p-sm-1 d-flex justify-content-center">
        <img class="image-empty" src="../../assets/food-and-restaurant.png" />
      </div>
      <div class="row d-flex justify-content-center">
        <h3>Your cart is empty</h3>
      </div>
      <div class="row d-flex justify-content-center">
        <h4>Please add some items from the menu</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Empty'
}
</script>

<style scope>

.image-empty {
  width: 250px;
  height: 270px;
}
.row {
  justify-content: center;
}

.cart {
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  padding: 20px;
}

.list img {
  padding-top: 50px;
}

h2 {
  font-size: 30px;
  line-height: 40px;
}

h3 {
  font-size: 25px;
  line-height: 40px;
}

h4 {
  font-size: 12px;
  line-height: 25px;
  color: #cecece;
}

@media (max-width: 768px) {
   .image-empty {
    width: 100px;
    height: 150px;
  }
  .image {
    width: 100px;
    height: 80px;
    border-radius: 10px 10px 0px 0px;
  }
  header,
  aside .cart {
    height: 50px;
  }
  header h2,
  aside .cart h2 {
    font-size: 20px;
    line-height: 20px;
  }
  main {
    height: 310px;
  }
  article h6 {
    font-size: 10px;
  }
  article h3 {
    font-size: 13px;
  }
  article h4.text {
    /* font-size: 9px; */
  }
  aside h3 {
    font-size: 12px;
    line-height: 20px;
  }
  aside h4 {
    /* font-size: 8px; */
    line-height: 10px;
  }
  aside .list .item h3 {
    font-size: 10px;
  }
  aside .list .price h4 {
    font-size: 10px;
  }
  aside .scroll {
    overflow-y: scroll;
    height: 300px;
  }
  aside .scroll::-webkit-scrollbar {
    display: none;
  }
  aside .btm .checkout {
    margin-top: 10px;
  }
  aside .btm .checkout {
    padding: 5px;
  }
  aside .btm .cancel {
    padding: 10px;
  }
  div.list {
    height: 310px;
  }
}

@media (max-width: 576px) {
  .icon {
    width: 15px;
    height: 15px;
  }
  .image {
    width: 180px;
    height: 150px;
    border-radius: 10px 10px 0px 0px;
  }
  main {
    height: 600px;
  }
  main .menu .row {
    flex-direction: column;
  }
  article h6 {
    font-size: 20px;
  }
  aside .scroll {
    overflow-y: scroll;
    height: 600px;
  }
  aside .scroll::-webkit-scrollbar {
    display: none;
  }
  aside .list h3 {
    font-size: 12px;
    flex-direction: column;
  }
  aside .list h4 {
    flex-direction: column;
    font-size: 12px;
    padding-top: 5px;
  }
  aside .list .select {
    justify-content: center;
    padding: 10px;
    padding-top: 0;
  }
  aside .list .price {
    flex-direction: column;
  }
  aside .btm {
    padding: 5px;
  }
  aside .btm h3 {
    font-size: 11px;
  }
  aside .btm p {
    font-size: 10px;
  }
}
</style>
