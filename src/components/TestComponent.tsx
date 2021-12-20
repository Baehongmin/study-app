import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/conterSlice";
import { RootState } from "../store/store";

const TestComponent = () => {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()
    return <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
    </div>
}

export default TestComponent;