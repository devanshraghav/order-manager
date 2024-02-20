const ProductSummary = () => {

  return (
    <div className="product-list">
      <div className="flex">
        <h3>Product Summary</h3>

        <div>
          <label htmlFor="">Show</label>
          <select name="" id="">
            <option value="all">All Column</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <button>Dispacth Selected</button>

        <div>
          <button>back</button>
          <button>next</button>
        </div>
      </div>

{/* Table contents */}
      <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" id="check-all"/></th>
                    <th>ID</th>
                    <th>Shipiify</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Shipping</th>
                    <th>Source</th>
                    <th>Order Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>1077620</td>
                    <td>17713</td>
                    <td>22 Jan 2020</td>
                    <td>Pending</td>
                    <td>Ahmed</td>
                    <td>ahmed.123@mail.com</td>
                    <td>Australia</td>
                    <td>Austrelian Post Api</td>
                    <td>ShopifyAU</td>
                    <td>Customer</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>1077620</td>
                    <td>17713</td>
                    <td>22 Jan 2020</td>
                    <td>Pending</td>
                    <td>Ahmed</td>
                    <td>ahmed.123@mail.com</td>
                    <td>Australia</td>
                    <td>Austrelian Post Api</td>
                    <td>ShopifyAU</td>
                    <td>Customer</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>1077620</td>
                    <td>17713</td>
                    <td>22 Jan 2020</td>
                    <td>Pending</td>
                    <td>Ahmed</td>
                    <td>ahmed.123@mail.com</td>
                    <td>Australia</td>
                    <td>Austrelian Post Api</td>
                    <td>ShopifyAU</td>
                    <td>Customer</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSummary;
