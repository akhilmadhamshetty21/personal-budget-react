import React from 'react';

function HomePage() {
  return (
    <main id="maincontent">
      <div class="container center">
        <div class="page-area">
          <div class="text-box">
           
            <section>
            
              <article role="article">
                <h1>Stay on track</h1>
                <p>
                  Do you know where you are spending your money? If you really
                  stop to track it down, you would get surprised! Proper budget
                  management depends on real data... and this app will help you
                  with that!
                </p>
              </article>
            </section>
          </div>

          <div class="text-box">
            
            <section>
              
              <article>
                <h1>Alerts</h1>
                <p>
                  What if your clothing budget ended? You will get an alert. The
                  goal is to never go over the budget.
                </p>
              </article>
            </section>
          </div>

          <div class="text-box">
            
            <section>
              <h1>Results</h1>
              <p>
                People who stick to a financial plan, budgeting every expense,
                get out of debt faster! Also, they to live happier lives...
                since they expend without guilt or fear... because they know it
                is all good and accounted for.
              </p>
            </section>
          </div>

          <div class="text-box">
            
            <section>
              <h1>Free</h1>
              <p>
                This app is free!!! And you are the only one holding your data!
              </p>
            </section>
          </div>

          <div class="text-box">
            
            <section>
              <h1>Stay on track</h1>
              <p>
                Do you know where you are spending your money? If you really
                stop to track it down, you would get surprised! Proper budget
                management depends on real data... and this app will help you
                with that!
              </p>
            </section>
          </div>

          <div class="text-box">
            
            <section>
              <h1>Alerts</h1>
              <p>
                What if your clothing budget ended? You will get an alert. The
                goal is to never go over the budget.
              </p>
            </section>
          </div>
          <h1>Donut D3 Chart</h1>
          <div id="chart">chart</div>

          <div class="text-box">
            
            <h1>Pie Chart</h1>
            <p>
              <canvas id="myChart" width="400" height="400"></canvas>
            </p>
          </div>
        </div>
      </div>
      <img
        src="budget.jpg"
        width="30%"
        height="30%"
        alt="Displaying budget photo"
      />
    </main>
  );
}

export default HomePage;
