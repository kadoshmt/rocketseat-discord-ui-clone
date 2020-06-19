import React, { Props } from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={ isBot ? 'bot' : '' } />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Disponível - 1</Role>
      <UserRow nickname='Guilherme Rodz' />

      <Role> Offline - 18</Role>
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='João' />
      <UserRow nickname='Maria' />
      <UserRow nickname='Pedro' />
      <UserRow nickname='José' />
      <UserRow nickname='Thiago' />
      <UserRow nickname='Judas' />
      <UserRow nickname='Paulo' />
      <UserRow nickname='Sergio' />
      <UserRow nickname='Maria' />
      <UserRow nickname='Pedro' />
      <UserRow nickname='José' />
      <UserRow nickname='Thiago' />
      <UserRow nickname='Judas' />
      <UserRow nickname='Paulo' />
      <UserRow nickname='Sergio' />
      <UserRow nickname='Maria' />
      <UserRow nickname='Pedro' />
      <UserRow nickname='José' />
      <UserRow nickname='Thiago' />
      <UserRow nickname='Judas' />
      <UserRow nickname='Paulo' />
      <UserRow nickname='Sergio' />
      
    </Container>
  )
}

export default UserList;
