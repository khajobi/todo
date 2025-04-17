import { renderHook, act } from "@testing-library/react";
import { useDialog } from "@/hooks";

describe("useDialog", () => {
    it("opens and closes correctly", () => {
        const { result } = renderHook(() => useDialog());

        expect(result.current.isOpen).toBe(false);

        act(() => result.current.openDialog());
        expect(result.current.isOpen).toBe(true);

        act(() => result.current.closeDialog());
        expect(result.current.isOpen).toBe(false);
    });
});
