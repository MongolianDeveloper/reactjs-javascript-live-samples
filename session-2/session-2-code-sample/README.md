# (Session-2) useEffect hook-н хэрэглээнүүд

Хичээлийн видеог энэ [Facebook](https://www.facebook.com/React-JS-live-%D1%85%D1%8D%D0%BB%D1%8D%D0%BB%D1%86%D2%AF%D2%AF%D0%BB%D1%8D%D0%B3-101628288452147) хуудаснаас үзээрэй.

## Агуулга **(Parts)**

1. Side effect гэж ву вэ **(What is a side effect?)**
   - Clean up функц шаардлагагүй react компонент **(useEffect without cleanup)**
   - Clean up функц шаардлагатай react компонент **(useEffect with cleanup)**
2. useEffect болон Lifecycle функцууд **(useEffect vs Lifecycle methods)**
3. useEffect-г байнга дуудагдахаас сэргийлэх **(Prevent useEffect from running every render)**
4. useEffect-г зөвхөн нэг удаа дуудах **(run useEffect once on mount)**
5. useEffect нь яг хэзээ дуудагддаг вэ **(when does useEffect run?)**
6. useEffect-г өгөгдөл (state) өөрчлөгдөхөд дуудах **(run useEffect on state change)**
7. useEffect-г пропс (props) өөрчлөгдөхөд дуудах **(run useEffect when a prop changes)**
8. useEffect-г ашиглан өгөгдөл татах/хадгалж авах **(Fetch data with useEffect)**
9. useEffect ашиглах зөвлөгөөнүүд
   - Бие даасан олон useEffect зарлаж ашиглах **(Use multiple effects to separate concerns)**
   - Яагаад useEffect нь компонент өөрчлөгдөх бүрд дуудагддаг вэ **(Whey useEffect run on each update?)**
   - Шаардлагагүй useEffect дуудагдахаас сэргийлэх **(Optimizing performance by skipping effects)**
   - Eslint ашиглан алдааны мэдээлэлүүд харуулах **(Warns incorrect dependencies and suggest a fix)**
   - Функцыг useEffect-н dependency-д зарлаж өгөх хэрэгтэй юу **(Is it safe to omit functions from the list of dependencies)**
   - useEffect төгсгөлгүй давталт **(Prevent infinite loops in useEffect)**
10. useEffect болон useLayoutEffect **(useEffect vs useLayoutEffect)**
