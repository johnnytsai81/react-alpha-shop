import Main from './components/main';

import styled from 'styled-components';
// 引用斷點
import { device } from './constants/style';

const Container = styled.div`
  padding: 3rem 1rem;
  margin: auto;
  @media ${device.mobile} {
    max-width: 540px;
  }

  @media ${device.tablet} {
    max-width: 720px;
  }

  @media ${device.tabletL} {
    max-width: 960px;
  }
  
  @media ${device.laptop} {
    max-width: 1140px;
  }

  @media ${device.desktop} {
    max-width: 1320px;
  }
`

// 引入 styled-components 套件
// import styled from 'styled-components';
 
// import { device } from './constants/style';

// theme color練習
// const TodoContent = styled.div`
//   font-size: 30px;
//   color: ${props => props.theme.colors.primary_300};

//   @media ${device.laptop} {
//     font-size: 20px;
//     color: ${props => props.theme.colors.primary_400};
//   }

//   @media ${device.desktop} {
//     font-size: 12px;
//     color: ${props => props.theme.colors.primary_500};
//   }
// `

// media練習
// const Button = styled.button`
//   font-size: 20px;

//   @media ${device.laptop} {
//     font-size 16px;
//   }

//   @media ${device.desktop} {
//     font-size: 12px;
//   }
// `

// styled-components 基本引入練習
// const TodoItemWrapper = styled.div`
//   max-width: 80%;
//   margin: 5px auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 8px 16px;
//   border: 1px solid #eee;
// `

// 繼承 TodoItem component，需要傳入 className
// function TodoItem ({ className, size, content }) {
//   return (
//     <TodoItemWrapper className={className}>
//       <TodoContent size={size}>{content}</TodoContent>
//       <TodoButtonWrapper>
//         <Button>未完成</Button>
//         <GreenButton>刪除</GreenButton>
//       </TodoButtonWrapper>
//     </TodoItemWrapper>
//   );
// }


export default function App() {
  return (
    <div className="App">
      <Container>
        <Main />
      </Container>
    </div>
  );
}
