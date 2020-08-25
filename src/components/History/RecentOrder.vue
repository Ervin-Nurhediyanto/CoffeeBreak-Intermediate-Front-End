<template>
  <div class="row">
    <div class="col m-md-4 m-sm-4 recent">
      <div class="row p-md-3 p-sm-3 d-flex justify-content-between">
        <h3>Recent Order</h3>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Today</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">1</a>
            <a class="dropdown-item" href="#">2</a>
            <a class="dropdown-item" href="#">3</a>
            <a class="dropdown-item" href="#">4</a>
            <a class="dropdown-item" href="#">5</a>
            <a class="dropdown-item" href="#">6</a>
            <a class="dropdown-item" href="#">7</a>
            <a class="dropdown-item" href="#">8</a>
            <a class="dropdown-item" href="#">9</a>
            <a class="dropdown-item" href="#">10</a>
            <a class="dropdown-item" href="#">11</a>
            <a class="dropdown-item" href="#">12</a>
            <a class="dropdown-item" href="#">13</a>
            <a class="dropdown-item" href="#">14</a>
            <a class="dropdown-item" href="#">15</a>
            <a class="dropdown-item" href="#">16</a>
            <a class="dropdown-item" href="#">17</a>
            <a class="dropdown-item" href="#">18</a>
            <a class="dropdown-item" href="#">19</a>
            <a class="dropdown-item" href="#">20</a>
            <a class="dropdown-item" href="#">21</a>
            <a class="dropdown-item" href="#">22</a>
            <a class="dropdown-item" href="#">23</a>
            <a class="dropdown-item" href="#">24</a>
            <a class="dropdown-item" href="#">25</a>
            <a class="dropdown-item" href="#">26</a>
            <a class="dropdown-item" href="#">27</a>
            <a class="dropdown-item" href="#">28</a>
            <a class="dropdown-item" href="#">29</a>
            <a class="dropdown-item" href="#">30</a>
            <a class="dropdown-item" href="#">31</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <table>
                <tr>
                  <th class="left">INVOICES</th>
                  <th>CASHIER</th>
                  <th>DATE</th>
                  <th>ORDERS</th>
                  <th>AMOUNT</th>
                </tr>
              </table>
            </div>
          </div>
          <div class="row line"></div>
          <div class="row">
            <div class="col">
              <table>
                <tr>
                  <td class="left">#10928</td>
                  <td>Cashier 1</td>
                  <td>06 October 2019</td>
                  <td>Ice Tea, Salad With peanut sauce</td>
                  <td>Rp.120.000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentOrder'
}
</script>

<style scoped>

.dropdown button {
  width: 80px;
  height: 25px;
  font-size: 10px;
  background: #cecece;
  border-radius: 10px;
  color: #4f4e4e;
}

/* Recent */

.recent {
  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.recent table {
  width: 100%;
}

.recent table th,
.recent table td {
  text-align: center;
  width: 20%;
}

.recent table td {
  font-size: 15px;
  color: #cecece;
  padding-top: 5px;
  padding-bottom: 5px;
}

.recent table .left {
  text-align: left;
  padding-left: 10px;
}

.recent .line {
  border: 1px solid #cecece;
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
