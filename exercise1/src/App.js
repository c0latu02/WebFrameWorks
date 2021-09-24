import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotifications from './components/NewsNotifications';
import SideNews from './components/SideNews';
import LowerPanel from './components/LowerPanel';


function App() {


  //..API Call and response
  //as a result the data would be availble
  

  const NewsNotificationsData = [
    {
      topic:'PÄIVÄN TIMANTTI',
      body: '81-vuotias Pertti Järvinen väittelee tänään tohtoriksi toista kertaa elämässään – Nyt hän kertoo poikkeuksellisen oppimiskykynsä salaisuuden'
    },
    {
      topic:'KORONAVIRUS',
      body: 'Voiko koronarokotteista ilmetä haittoja vielä vuosien jälkeen? ”Haittaprofiili alkaa olla jo hyvin tiedossa”, ylilääkäri sanoo'
    },
    {
      topic:'PÄIVÄN VITSI',
      body: 'Mikä tori on pellolla. No traktori!'
    },
  ];

;

  const MainSectionData = [
    {
      topic:'Lorem Ipsum',
      body: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      topic:'Siansaksaa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis tellus sed ultrices vestibulum. Duis blandit, sapien nec interdum venenatis, tellus ex efficitur sem, ut dignissim ex felis non neque. Ut convallis, magna ut scelerisque aliquet, magna eros faucibus augue, quis aliquet odio nunc non nunc. Nullam facilisis mollis lectus quis dictum. Ut commodo augue leo, a feugiat neque commodo sit amet. Sed vitae ultricies augue. Donec vel tortor sollicitudin magna luctus vestibulum. Nunc sit amet mauris mollis sem convallis lobortis ac in massa. Nulla ornare urna metus, quis hendrerit purus tempus ut. Aenean at tristique tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pharetra nunc sed enim commodo luctus vel a enim. Nullam quis eros vulputate, iaculis nibh in, lacinia nulla. Curabitur nisi elit, tristique volutpat tristique id, luctus ac eros.'
    },
    {
      topic:'Vitsi',
      body: 'Mikä on ruskea ja lentää taivaalla, ruostunut teräsmies!'
    },
  ];

  const SideNewsData = [
    {
      topic:'1',
      body: ' Cras gravida ante ac fringilla vestibulum. Praesent rutrum ac dolor nec dictum. Proin vitae lacus id metus pretium porta. Mauris non urna nec augue bibendum euismod sit amet eget leo. Quisque faucibus consectetur consectetur. Integer sollicitudin felis sit amet viverra sodales. Aliquam eu libero at orci tempus rutrum. Morbi est lorem, ultrices vitae lectus a, placerat venenatis risus. Quisque faucibus dolor et nulla vehicula rutrum.'
    },
    {
      topic:'2',
      body: ' Phasellus tristique nulla erat, in tristique velit ornare vitae. In hac habitasse platea dictumst. Vestibulum lobortis eleifend vulputate. Nulla ligula massa, mattis eu sapien non, semper gravida augue. Nullam porttitor nunc vitae sapien convallis, eget mattis augue feugiat. Etiam pulvinar, erat sit amet ornare fringilla, nunc orci lacinia leo, ac ultricies ante turpis nec dolor. Curabitur imperdiet enim quis enim rutrum rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dignissim urna vel neque varius semper.n'
    },
    {
      topic:'3',
      body: 'Fusce pellentesque quam velit, nec vehicula massa porttitor id. Quisque aliquet finibus urna, et venenatis nunc. Maecenas sodales dolor eget finibus dictum. Pellentesque rhoncus nunc massa, et efficitur nibh pharetra et. Proin aliquam tincidunt metus, at efficitur libero rhoncus imperdiet. Mauris suscipit aliquet arcu sit amet vehicula. Nullam scelerisque elementum tortor. Integer hendrerit elementum ex sed mattis. Nam dictum accumsan turpis, sed efficitur magna varius in. Vestibulum vehicula, massa sit amet maximus aliquet, mauris nulla scelerisque dui, et efficitur nisl massa in lectus. Ut semper suscipit est. Vestibulum volutpat euismod quam, ac cursus est viverra ut. Sed congue augue a finibus venenatis. Pellentesque ultrices malesuada lectus, a molestie dui luctus quis.s'
    }
  ]


  return (
    <div>


      <Header />
      <LowerPanel />
      
      {
        NewsNotificationsData.map(element => <NewsNotifications topic={ element.topic} body={ element.body }/>)
      }
      <div class="header"> 
        <div class="column">    
        {
        MainSectionData.map(element => <MainSection topic={ element.topic} body={ element.body }/>)
        }
        </div>

        <div class="column">  
        <h2>Luetuimmat</h2>  
      {
        SideNewsData.map(element => <SideNews topic={ element.topic} body={ element.body }/>)
      }
      </div>
      </div>           

    </div>
  );
}

export default App;
