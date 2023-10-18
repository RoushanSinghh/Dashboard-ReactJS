function Items() {
  return (
    <>
      <div className='card'>
        <img src='src/images/dollar-image.jpg' alt='Dollar Sign' />
        <div className='inner-text'>
          <span style={{ color: '#9e9ea4' }}>Earning</span>
          <span
            style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}
          >
            $198k
          </span>
          <div>
            <span style={{ color: 'green', paddingRight: '2px' }}>🠙37.8%</span>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src='src/images/orders.jpg' alt='Order Sign' />
        <div className='inner-text'>
          <span style={{ color: '#9e9ea4' }}>Orders</span>
          <span
            style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}
          >
            $2.4k
          </span>
          <div>
            <span style={{ color: 'red', paddingRight: '2px' }}>🠛2%</span>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src='src/images/balance.jpg' alt='Balance Sign' />
        <div className='inner-text'>
          <span style={{ color: '#9e9ea4' }}>Balance</span>
          <span
            style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}
          >
            $2.4k
          </span>
          <div>
            <span style={{ color: 'red', paddingRight: '2px' }}>🠛2%</span>
            <span>this month</span>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src='src/images/total-sales.jpg' alt='Total-Sales Sign' />
        <div className='inner-text'>
          <span style={{ color: '#9e9ea4' }}>Total Sales</span>
          <span
            style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}
          >
            $89k
          </span>
          <div>
            <span style={{ color: 'green', paddingRight: '2px' }}>🠙11.8%</span>
            <span>this week</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
