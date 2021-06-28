const teams = [
  { id: 2, value: '인사' },
  { id: 3, value: '회계' },
  { id: 4, value: '개발' },
  { id: 5, value: '영업' },
  { id: 6, value: '기획' },
  { id: 7, value: '디자인' },
]

const ranks = [
  { id: 2, value: '부장' },
  { id: 3, value: '차장' },
  { id: 4, value: '과장' },
  { id: 5, value: '대리' },
  { id: 6, value: '직원' },
]

const themes = [
  { id: 1, value: 'Gray' },
  { id: 2, value: 'Blue' },
  { id: 3, value: 'Yellow' },
]

class DropDown {
  constructor() {
    this.teams = teams
    this.ranks = ranks
    this.themes = themes
  }

  getTeams() {
    return this.teams
  }

  getRanks() {
    return this.ranks
  }

  getThemes() {
    return this.themes
  }
}

export default DropDown
