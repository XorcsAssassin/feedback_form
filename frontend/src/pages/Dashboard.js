import Nav from '../components/nav';
import MainContent from '../components/maincontentCust';
import Footer from '../components/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Nav />
      <div className={styles.mainContent}>
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
