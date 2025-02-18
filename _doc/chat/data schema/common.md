채팅 서비스 설계 `https://okky.kr/article/459448`

```

// 앱의 전역 상태
type State {
    
    // 현재 로그인 상태의 유저
    user: User
    
    // 채팅방 목록
    rooms: [Room!]!
    
    // 현재 입장한 방 (vs. window.location.pathname 전달값)
    activeRoom: Room
    
    // 이 상태를 참조해서 방 나가기 기능을 on/off
    // 방 고정 입장  
    // roomFixed: Boolean = false
    
}

/*
유저가 방을 나가지 않고서 비정상적으로 소켓 연결을 종료 할 수 있습니다.
이럴 때 유령 유저가 방에 남아있는 것을 방지하기 위해서, 
서버에서 소켓과 유저에 동일한 id 값을 부여해두고,
소켓 종료시에 유령 유저를 방에서 퇴장 시킬 수도 있습니다.
*/
type User {
    id: Int!
    nickname: String!
    avatarUrl: String!
}

type Room {
    id: Int!
    
    // 방 제목
    title: String!
    
    // 현재 입장한 유저 목록
    users: [User!]!
    
    // 방에 누적된 메세지의 컬렉션
    messages: [Message!]!
}

type Message {
    id: Int!
    
    // 발신한 유저
    user: User!
    content: String!
    
    // String으로 혹은 Int(Unix Timestamp)
    // (서버와 앱이 JSON으로 통신)
    at: Date!
}
```