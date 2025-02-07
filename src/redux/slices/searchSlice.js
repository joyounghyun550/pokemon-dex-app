import { createSlice } from "@reduxjs/toolkit";

// 검색 상태를 관리하는 슬라이스 생성
const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "", // 현재 검색어 상태
  },
  reducers: {
    // 검색어를 설정하는 액션
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// 액션 생성자 내보내기
export const { setSearchTerm } = searchSlice.actions;

// 리듀서 내보내기 (스토어에서 사용)
export default searchSlice.reducer;
