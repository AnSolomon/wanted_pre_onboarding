# wanted_pre_onboarding
원티드 프리온보딩 코스

# 1. Toggle 
label 안에 input과 span(before, after)을 이용하였습니다.
그 이유는 input의 checkbox 기능을 이용하여 check 여부에 따라 span tag와 Text를 바꿔주면 효율적이라 판단하여 그렇게 구현하였습니다.

구현하면서 조금 막혔던 부분은 처음에 ON이 될 때 단순히 label 색이 바뀌는 것으로 생각하여 구현하였는데, 예시와 동작하는 방식이 달라 span after를 추가하여 구현하였습니다.

input checkbox가 초기에는 false고 span after는 toggle ON 시 배경색이라 초기에는 label 밖에다가 위치하였고 label overflow를 hidden으로 함으로써 보이지 않게 설정, 클릭 시 true로 변하고 true일 때 span의 after와 before를 transform을 이용하여 이동하였고, transition을 이용하여 부드럽게 표현하였습니다. 또한, check 상태를 useState로 관리하여 아래의 Text도 삼항 연산자로 표현하여 조건에 맞는 Text를 내보내도록 구현하였습니다. 


# 2. Modal
button을 클릭하면 handleModal이 실행되어 openModal 상태를 true로 바꾸면 조건에 의해 modal이 보여지고 modal 내부의 x를 누르면 다시 handleModal이 실행되면서 false가 되고 modal은 사라집니다. bool 변수를 && 조건으로 묶어놓으면 더 직관적으로 구현할 수 있을 것 같아서 이 방식을 사용하였습니다.

modal이 떠 있을 때 다른 기능은 사용 불가능하게 해야 하는데 고민하다가 z-index를 높여주는 것으로 해결하였습니다.

단순히 button을 누르면 handleModal 함수가 실행되면서 bool 값이 바뀌고 openModal 변수에 따라 modal창이 화면에 나왔다가 사라지기를 반복합니다.


# 3. Tab
tab 요소들을 array로 만들어 놓고 해당 인덱스 tab을 클릭하면 가지고 있던 content를 보여주는 식으로 구현하였습니다. 이렇게 구현한 이유는 tab에 요소를 추가하는 데 있어서 효율적인 방법이라 생각하였습니다.

tab menu를 라디오 버튼으로 해야 될지 그냥 li를 쓸지 고민하였고 구현하는 내용이 li로 써도
충분할 것 같아서 li를 이용하였습니다.

li로 tab menu를 구성하였고 tab menu를 클릭하게 되면 해당 index 번호가 currentTab 변수에
관리가 되며, 해당 currentTab의 숫자가 가지고 있던 content를 보여줍니다.


# 4. Tag
useState로 tagArr를 관리하였고, tag를 지울 때는 tagArr에 filter를 이용해 index를 가지고 비교하였습니다.
삭제, 생성할 때는 enter key값을 구분하여 useRef로 참조한 input 값을 추가하였습니다.
useEffect에 tagArr을 넣음으로써 tagArr를 생성하면 input 값을 비워주었습니다.
비동기 처리에 의해 로직이 꼬일 가능 고려하였기 때문에 이처럼 구현하였습니다.

enter 하여 tag 생성 후 input에 data가 남아있어서 여러 로직을 생각하다가 useEffect로 tagArr가 바뀌면 input Data Clear 처리를 하였습니다.

input을 누르면 tag 이름을 입력할 수 있고 Enter key를 누르면 makeTag 함수가 호출되면서 Enter key인지 그리고 빈 공백인지 확인 후에 tag를 생성합니다.
tag 옆에 x가 있는데 원래는 button으로 구현하려 했다가 x 문자를 다루기에는 div가 더 나을 것 같아 div로 button을 구현하였습니다. 이 x 모양을 누르면 해당 index가 삭제되고 useEffect에 의해 다시 렌더링 되면서 input data가 초기화됩니다.


# 5. AutoComplete
input에 입력할 때마다 그 값을 미리 저장한 data array에 filter를 써서 포함되어 있으면 새로운 array에 추가하는 식으로 자동완성에 보여줄 단어를 저장하였고, 단어 비교는 비교 대상 모두 대문자로 치환한 뒤에 비교하였습니다. 자동완성 css 같은 경우는 삼항 연산자를 이용하여 구현하였습니다.
이렇게 구현한 이유는 입력할 때마다 비교해서 실시간으로 렌더링하는 것이 자연스럽다고 생각하였고, 자동완성 css는 하나의 tag에서 처리하기에는 무리가 있어서 삼항 연산자로 비교해서 상황에 따라 다른 tag를 보여주었습니다.

자동완성 단어가 밑에 나올 때 css를 어떻게 구현해야 할지 생각하기 힘들었습니다.
그래서 삼항 연산자로 상황에 따라 다른 tag로 표현해주었습니다.

input에 값을 입력할 때마다 onChange 이벤트가 실행되면서 searchWord 함수를 호출하는데, 호출할 때 input의 입력값을 일단 trim 처리해주고, 공백인지 확인합니다. 공백이 아니라면 입력값이 포함된 data를 filter처리하여 새로운 array를 만들어 set합니다.
그 후에 만든 array가 비었는지 확인하고 data가 들어있다면 map을 통해 div로 표현해줍니다.
해당하는 단어를 누르면 그 단어가 input 값에 들어가게 되고 해당 단어로 다시 자동완성을 해줍니다.
그리고 옆에 x 버튼을 누르게 되면 input data가 Clear됩니다.


# 6. ClickToEdit
이름과 나이는 같은 형식이기 때문에 하나의 컴포넌트를 재사용하여 구현하였습니다.
ClickToEditElem라는 컴포넌트를 만들고 거기에 props를 받아 처리하였습니다.
이름과 나이 data를 받기 위해 title을 현재 내용을 받기 위한 content, 그리고 내용 변경을 위한 setState 함수를 props로 받았습니다.
이렇게 구현한 이유는 같은 형식이라 컴포넌트로 만들었고, 그 컴포넌트에 필요한 정보를 담아서 처리하면 효율적이라 생각하여 구현하였습니다.

이름과 나이에 내용을 바꿀 때 아래 div에도 적용하는 것을 생각하는 것이 쉽지 않았습니다.
ClickToEditElem 컴포넌트에 setState 함수를 넣어 자식 컴포넌트에서 바꿀 수 있게 처리하였습니다.

이름 또는 나이 옆에 div를 더블 클릭하게 되면 isEdit이 true가 되면서 input으로 바뀌고 내용을 쓰고 해당 tag 외에 다른 곳을 클릭하면 handleBlur에 의해 isEdit이 false가 되면서 다시 div로 바뀌고 useRef로 설정해놓은 input의 현재 값을 setState를 통해 내용이 바뀌면서 아래쪽 div에 보여지게 됩니다.
