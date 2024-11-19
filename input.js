document.getElementById('assetForm').addEventListener('submit', function(event) {//+
    event.preventDefault();//+
//+
    const yearOfPurchase = document.getElementById('yearOfPurchase').value;//+
    const purchaseValue = document.getElementById('purchaseValue').value;//+
    const saleValue = document.getElementById('saleValue').value;//+
    const annualIncome = document.getElementById('annualIncome').value;//+
    const assetType = document.getElementById('assetType').value;//+

    switch(assetType) {
        case 'land':
            calculateLandTax(yearOfPurchase, purchaseValue, saleValue, annualIncome);
            break;
        case 'mutualFunds':
            calculateMutualFundsTax(yearOfPurchase, purchaseValue, saleValue, annualIncome);
            break;
        case 'equity':
            calculateEquityTax(yearOfPurchase, purchaseValue, saleValue, annualIncome);
            break;
        case 'gold':
            calculateGoldTax(yearOfPurchase, purchaseValue, saleValue, annualIncome);
            break;
        default:
            console.log('Invalid asset type');
    }

//+


  });


  function calculateLandTax(yearOfPurchase, purchaseValue, saleValue, annualIncome) {
     const profit = saleValue - purchaseValue;
      const currentYear = new Date().getFullYear();
      const holdingPeriod = currentYear - yearOfPurchase;
      let tax;
      if (holdingPeriod > 2) {
          tax = profit * 0.125; // 12.5% of profit
      } else {
          tax = profit * 0.2; // 20% of profit
      }

      console.log(`Land Tax: ${tax}`);
      displayResults('Land', profit, tax);
      return tax;
  }

  function calculateMutualFundsTax(yearOfPurchase, purchaseValue, saleValue, annualIncome) {
      const profit = saleValue - purchaseValue;
      const currentYear = new Date().getFullYear();
      const holdingPeriod = currentYear - yearOfPurchase;
      let tax;

      if (holdingPeriod > 1) {
          tax = profit * 0.125; // 12.5% of profit
      } else {
          tax = profit * 0.2; // 20% of profit
      }

      console.log(`Mutual Funds Tax: ${tax}`);
      displayResults('Mutual Funds', profit, tax);
      return tax;
  }

  function calculateEquityTax(yearOfPurchase, purchaseValue, saleValue, annualIncome) {
      const profit = saleValue - purchaseValue;
      const currentYear = new Date().getFullYear();
      const holdingPeriod = currentYear - yearOfPurchase;
      let tax;

      if (holdingPeriod > 1) {
          tax = profit * 0.125; // 12.5% of profit
      } else {
          tax = profit * 0.2; // 20% of profit
      }

      console.log(`Equity Tax: ${tax}`);
      displayResults('Equity', profit, tax);
      return tax;
  }

  function calculateGoldTax(yearOfPurchase, purchaseValue, saleValue, annualIncome) {
      const profit = saleValue - purchaseValue;
      const currentYear = new Date().getFullYear();
      const holdingPeriod = currentYear - yearOfPurchase;
      let tax;

      if (holdingPeriod > 1) {
          tax = profit * 0.125; // 12.5% of profit
      } else {
          tax = profit * 0.2; // 20% of profit
      }

      console.log(`Gold Tax: ${tax}`);
      displayResults('Gold', profit, tax);
      return tax;
  }
//assetType, profit, tax, yearOfPurchase, purchaseValue, saleValue,userid  function displayResults(assetType, profit, tax) {
      const profitAfterTax = profit - tax;

      // Create a new window or tab
      const resultWindow = window.open('', '_blank');

      // Write the HTML content to the new window
      resultWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
                <!-- Basic -->
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <!-- Mobile Metas -->
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <!-- Site Metas -->
                <link rel="icon" href="images/fevicon.png" type="image/gif" />
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta name="author" content="" />

                <title>Outputpage</title>


                <!-- bootstrap core css -->
                <link rel="stylesheet" type="text/css" href="css/bootstrap2.css" />

                <!-- fonts style -->
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />

                <!-- font awesome style -->
                <link href="css/font-awesome.min.css" rel="stylesheet" />
                <!-- Custom styles for this template -->
                <link href="css/style.css" rel="stylesheet" />
                <!-- responsive style -->
                <link href="css/responsive.css" rel="stylesheet" />

          </head>
          <body>
              
          </body>
          </html>


          <!DOCTYPE html>
<html>



<body>

  <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section long_section px-0">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="index.html">
          <span>
            Cista
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <a class="nav-link" href="buffer.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=""> About</a>
              </li>
            </ul>
          </div>
          <div class="quote_btn-container">
            <a href="index.html">
              <span>
                Log Out
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
    <!-- end header section -->
    <!-- slider section -->
    <section class="slider_section long_section">
      <div id="customCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                    <div class="col-md-5">
                        <h1>Tax Calculation Results for ${assetType}</h1>
              <table>
                  <tr>
                      <th>Item</th>
                      <th>Amount</th>
                  </tr>
                  <tr>
                      <td>Capital Gains</td>
                      <td>Rs.${profit.toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>Tax</td>
                      <td>Rs.${tax.toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>Profit</td>
                      <td>Rs.${profitAfterTax.toFixed(2)}</td>
                  </tr>
              </table>


                    </div>
                <div class="col-md-7">
                  <div class="img-box">
                    <img src="images/slider-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    <!-- end slider section -->
  </div>

  <!-- footer section -->
  <footer class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="">Group-11 CSE-A</a>
      </p>
    </div>
  </footer>
  <!-- footer section -->


  <!-- jQery -->
  <!-- bootstrap js   <script src="js/bootstrap.js"></script> -->
  
  

 



</script>
</body>

</html>
      `);

      // Close the document writing
      resultWindow.document.close();
  
