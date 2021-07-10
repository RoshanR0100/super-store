import React from 'react';
import SaleCard from './SaleCard';



const Deals = ({sale}) => {
            return (
              <div>
                <b>
                  <h1 style={{margin: 20}} >Deals</h1>
                </b>
                <br />
                {/* {sale.map((i)=> (
                        <SaleCard key={i.id} id={i.id} name={i.name} description={i.description} price={i.price} />
                ))}                     */}
              </div>
              );
          // else
          // {
          //   return(
          //     <div>
          //       <b>
          //         <h1 style={{margin: 20}} >Deals</h1>
          //       </b>
          //       <br />
          //       <h3 style={{margin: 50, marginBottom: 300}}>No items are on sale</h3>
          //     </div>
          //   );
          // }        
  };

export default Deals;