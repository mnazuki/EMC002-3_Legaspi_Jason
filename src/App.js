
import './App.css';
import UserProfile from './components/Greeting';

function App() {
  return (
    <div class="UserProfiles">
      <div class="card-container">
        <div class="card">
        <img class="img1" src="/images/chaewon.jpg" alt="Kim Chaewon" />
          <div class="card-content">
            <UserProfile name="Kim Chaewon" age="24" location="Quezon City"/>
          </div>
        </div>
        <div class="card">
        <img class="img2" src="/images/nayeon.jpg" alt="Im Nayeon" />
          <div class="card-content">
          <UserProfile name="Im Nayeon" age="28" location="Pasig City"/>
          </div>
        </div>
        <div class="card">
        <img class="img3" src="/images/haerin.jpg" alt="Kang Haerin" />
          <div class="card-content">
          <UserProfile name="Kang Haerin" age="18" location="Makati City"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
