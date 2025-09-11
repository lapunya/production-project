import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
    test('Sidebar test', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar)
        renderWithTranslation(<SidebarWithTranslation/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar toggle test', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar)
        renderWithTranslation(<SidebarWithTranslation/>);
        const toggleBtn = screen.getByTestId('toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
})