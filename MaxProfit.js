/*
 *
 * (c) Phuong Tran <tvpsoft@live.com>
 * @AlumnTest
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


class MaxProfit {

  /**
  * With an array which represents monthly sales as parameter,
  * create a function maxProfit that returns the highest profit from a month sale to the next one
  *
  * e.g [4, 22, 5, 8, 38] returns => 30
  * if there is no profit or the profit is negative return 0
  *
  * @param  [int]  Array of monthly sales
  * @return int The value the highest profit from a month sale to the next one
  */
  calculate (_arrSales){

    var _out = 0;
    for (var i = (_arrSales.length - 1); i >= 0; i--) {
      //monthly sales should not be negative
      if(_arrSales[i] < 0){
        return 0;
      }
      // calculate maxProfit
      if((i-1) >= 0 ){
        _out = Math.max(_out, _arrSales[i] - _arrSales[i-1]);
      }
    }
    return _out;
  }


}
