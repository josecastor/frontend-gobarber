import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>15 de Agosto</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>09:00</strong>
          <span>Castor</span>
        </Time>
        <Time available>
          <strong>09:30</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Castor</span>
        </Time>
        <Time>
          <strong>10:30</strong>
          <span>Castor</span>
        </Time>
      </ul>
    </Container>
  );
}
