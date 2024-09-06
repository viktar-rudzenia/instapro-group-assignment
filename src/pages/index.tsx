import { TrelloBoard } from 'components/trello-board';
import { ContentWrapper, Footer, Header } from 'components/layout';

import styles from './index.module.scss';

function HomePage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ContentWrapper>
        <TrelloBoard />
      </ContentWrapper>
      <Footer />
    </div>
  );
}

export default HomePage;
