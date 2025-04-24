import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ActionIconButton } from '@/components';
import DeleteIcon from '@mui/icons-material/Delete';

describe('ActionIconButton', () => {
    test('renders the icon and handles click', () => {
        const handleClick = vi.fn();

        render(
            <ActionIconButton
                iconComponent={DeleteIcon} 
                color="primary" 
                onClick={handleClick} 
            />
        );

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
