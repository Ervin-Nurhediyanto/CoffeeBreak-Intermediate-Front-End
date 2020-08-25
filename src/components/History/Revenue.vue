<template>
  <div class="row">
    <div class="col m-md-4 m-sm-4 revenue">
      <div class="row p-md-3 p-sm-3 d-flex justify-content-between">
        <h3>Revenue</h3>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Month</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">January</a>
            <a class="dropdown-item" href="#">February</a>
            <a class="dropdown-item" href="#">March</a>
            <a class="dropdown-item" href="#">April</a>
            <a class="dropdown-item" href="#">May</a>
            <a class="dropdown-item" href="#">June</a>
            <a class="dropdown-item" href="#">July</a>
            <a class="dropdown-item" href="#">August</a>
            <a class="dropdown-item" href="#">September</a>
            <a class="dropdown-item" href="#">October</a>
            <a class="dropdown-item" href="#">November</a>
            <a class="dropdown-item" href="#">December</a>
          </div>
        </div>
      </div>
      <div class="row p-md-3 p-sm-3">
        <table>
          <tr>
            <th>50k</th>
            <td rowspan="8"></td>
            <!-- date 3 -->
            <td rowspan="4"></td>
            <td rowspan="3"></td>
            <td rowspan="7"></td>
            <!-- date 6 -->
            <td rowspan="3"></td>
            <td rowspan="2"></td>
            <td rowspan="7"></td>
            <!-- date 9 -->
            <td rowspan="4"></td>
            <td rowspan="5"></td>
            <td rowspan="7"></td>
            <!-- date 12 -->
            <td rowspan="3"></td>
            <td rowspan="4"></td>
            <td rowspan="7"></td>
            <!-- date 15 -->
            <td rowspan="3"></td>
            <td rowspan="1"></td>
            <td rowspan="7"></td>
            <!-- date 18 -->
            <td rowspan="1"></td>
            <td rowspan="3"></td>
            <td rowspan="7"></td>
            <!-- date 21 -->
            <td rowspan="3"></td>
            <td rowspan="6" class="lastMonth"></td>
            <td rowspan="7"></td>
            <!-- date 24 -->
            <td rowspan="6" class="thisMonth"></td>
            <td rowspan="4"></td>
            <td rowspan="7"></td>
            <!-- date 27 -->
            <td rowspan="1"></td>
            <td rowspan="2"></td>
            <td rowspan="7"></td>
            <!-- date 30 -->
            <td rowspan="2"></td>
            <td rowspan="1"></td>
            <td rowspan="7"></td>
            <td colspan="3" class="info">This Month :</td>
            <td colspan="2" class="thisMonth info"></td>
          </tr>
          <tr>
            <th>40k</th>
            <td rowspan="5" class="lastMonth"></td>
            <td rowspan="5" class="thisMonth"></td>
            <td rowspan="5" class="thisMonth"></td>
            <td rowspan="5" class="lastMonth"></td>
            <td colspan="3" class="info">Last Month :</td>
            <td colspan="2" class="lastMonth info"></td>
          </tr>
          <tr>
            <th>30k</th>
            <td rowspan="4" class="lastMonth"></td>
            <td rowspan="4" class="lastMonth"></td>
            <td rowspan="4" class="thisMonth"></td>
            <td rowspan="5"></td>
            <td rowspan="5"></td>
            <td rowspan="5"></td>
            <td rowspan="5"></td>
            <td rowspan="5"></td>
          </tr>
          <tr>
            <th>20k</th>
            <td rowspan="3" class="lastMonth"></td>
            <td rowspan="3" class="thisMonth"></td>
            <td rowspan="3" class="thisMonth"></td>
            <td rowspan="3" class="thisMonth"></td>
            <td rowspan="3" class="lastMonth"></td>
            <td rowspan="3" class="thisMonth"></td>
          </tr>
          <tr>
            <th>10k</th>
            <td rowspan="2" class="thisMonth"></td>
            <td rowspan="2" class="thisMonth"></td>
            <td rowspan="2" class="lastMonth"></td>
            <td rowspan="2" class="lastMonth"></td>
          </tr>
          <tr>
            <th>0</th>
            <td class="lastMonth"></td>
          </tr>
          <tr>
            <th class="date">Date</th>
            <td colspan="2">3</td>
            <td colspan="2">6</td>
            <td colspan="2">9</td>
            <td colspan="2">12</td>
            <td colspan="2">15</td>
            <td colspan="2">18</td>
            <td colspan="2">21</td>
            <td colspan="2">24</td>
            <td colspan="2">27</td>
            <td colspan="2">30</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Revenue'
}
</script>

<style scoped>

h3,
h4,
h5,
button,
table th,
table td {
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

/* Revenue */

.revenue {
  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.dropdown button {
  width: 80px;
  height: 25px;
  font-size: 10px;
  background: #cecece;
  border-radius: 10px;
  color: #4f4e4e;
}

.revenue table .date {
  color: black;
}

.revenue table th {
  text-align: start;
  padding-bottom: 0;
  padding-left: 10px;
  font-size: 15px;
  color: #cecece;
}

.revenue table td {
  width: 30px;
  text-align: center;
  font-size: 12px;
}

.revenue .thisMonth {
  background-color: #00f1ff;
}

.revenue .lastMonth {
  background-color: #ffb8c6;
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
