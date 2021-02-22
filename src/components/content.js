import phone from '../images/phone.svg'

export const Content = ()=>{
return  <section className="content-section">
    <div className="main-content">
    <div className="content">
<div className="text-content">
  <h4>Payments infrastructure for the internet</h4>
  <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
  <div className="start">
      <button className="sign-in">start now</button>
  </div>
</div>

<div className="image-content">
  <img src={phone} alt=""/>
</div>
</div>
</div>
  </section>
}