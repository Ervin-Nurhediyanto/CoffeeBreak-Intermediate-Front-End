<template>
  <div class="row">
    <div class="col-md-4 p-md-4 col-sm-4 p-sm-3">
      <div class="col d-flex align-content-center flex-wrap today">
        <div class="row">
          <div class="col pl-md-5">
            <h5>Today’s Income</h5>
            <h3>Rp.1.000.000</h3>
            <h5>+2% Yesterday</h5>
          </div>
        </div>
        <div class="elipse1"></div>
        <div class="elipse2"></div>
        <div class="elipse3"></div>
      </div>
    </div>
    <div class="col-md-4 p-md-4 col-sm-4 p-sm-3">
      <div class="col d-flex align-content-center flex-wrap order">
        <div class="row">
          <div class="col pl-md-5">
            <h5>Orders</h5>
            <h3>3.270</h3>
            <h5>+5% Last Week</h5>
          </div>
        </div>
        <div class="elipse1"></div>
        <div class="elipse2"></div>
        <div class="elipse3"></div>
      </div>
    </div>
    <div class="col-md-4 p-md-4 col-sm-4 p-sm-3">
      <div class="col d-flex align-content-center flex-wrap year">
        <div class="row">
          <div class="col pl-md-5">
            <h5>This Year’s Income</h5>
            <h3>Rp.100.000.000.000</h3>
            <h5>+10% Last Year</h5>
          </div>
        </div>
        <div class="elipse1"></div>
        <div class="elipse2"></div>
        <div class="elipse3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardIncome'
}
</script>

<style scoped>
.today,
.order,
.year {
  border-radius: 10px;
  height: 180px;
}

.today {
  background: linear-gradient(
    285.38deg,
    #fbb2b4 30.05%,
    rgba(255, 143, 178, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
}

.order {
  background: linear-gradient(
    285.38deg,
    #29dfff 30.05%,
    rgba(41, 223, 255, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
}

.year {
  background: linear-gradient(
    285.38deg,
    #ab84c8 30.05%,
    rgba(241, 201, 236, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.8));
}

.elipse1,
.elipse2,
.elipse3 {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background: rgba(253, 211, 228, 0.3);
}

.elipse1 {
  position: absolute;
  top: 10px;
  right: 10px;
}

.elipse2 {
  position: absolute;
  top: 30px;
  right: 50px;
}

.elipse3 {
  position: absolute;
  top: 50px;
  right: 80px;
}

@media (max-width: 992px) {
  main .year h3 {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  main.mainbar {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .icon {
    width: 25px;
    height: 25px;
  }
  h3 {
    font-size: 20px;
  }
  h5 {
    font-size: 10px;
  }
  main .year h3 {
    font-size: 15px;
  }
  main .elipse1,
  main .elipse2,
  main .elipse3 {
    width: 50px;
    height: 50px;
  }
  main .elipse1 {
    top: 5px;
    right: 5px;
  }
  main .elipse2 {
    top: 20px;
    right: 20px;
  }
  main .elipse3 {
    top: 35px;
    right: 35px;
  }
  main .revenue table th,
  main .revenue table td {
    font-size: 12px;
  }
  main .revenue table td.info {
    font-size: 7px;
  }
  main .recent h3,
  .revenue h3 {
    font-size: 16px;
  }
  main .recent table th {
    font-size: 13px;
  }
  main .recent table td {
    font-size: 11px;
  }
}

@media (max-width: 576px) {
  header.row {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  header .col-md-1 {
    flex-direction: column;
    width: 15%;
  }
  header .col-md-11 {
    flex-direction: column;
    width: 85%;
    align-items: center;
    padding-top: 5px;
  }
  nav {
    padding: 8px;
  }
  nav .col {
    padding-left: 0;
  }
  nav .icon {
    margin-right: 10px;
  }
  main {
    padding: 20px;
  }
  main .row .revenue {
    margin: 10px;
  }
  main .row .revenue .row {
    padding: 10px;
  }
  main .recent {
    margin: 10px;
  }
  main .recent .p-md-3 {
    padding: 10px;
  }
  main .recent table th {
    font-size: 8px;
  }
  main .row .recent .line {
    padding: 0;
  }
  main .col-md-4 {
    margin-bottom: 10px;
  }
  main h3,
  main .year h3 {
    font-size: 30px;
  }
  main h5 {
    font-size: 12px;
  }
  main .recent table .left {
    text-align: left;
    padding-left: 0px;
  }
}
</style>
