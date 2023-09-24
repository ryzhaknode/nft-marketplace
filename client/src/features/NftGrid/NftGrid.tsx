import Grid from '@mui/material/Unstable_Grid2';
import { NavLink } from 'react-router-dom';
import { INftItem } from '../../shared/types/INftItem';
import { ROUTES } from '../../app/routes/routesConfig';
import NftCard from '../../entities/NftCard/NftCard';

export interface INftGridProps {
    data: INftItem[];
}

function NftGrid({ data }: INftGridProps) {
    return (
        <Grid justifyContent="space-between" container spacing={4} columns={12}>
            {data.map((card: INftItem) => (
                <Grid key={card.id} laptop={data.length > 2 ? 4 : 6} tablet={6} mobile={12}>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to={`/${ROUTES.cardPage(card.id)}`}
                    >
                        <NftCard {...card} />
                    </NavLink>
                </Grid>
            ))}
        </Grid>
    );
}

export default NftGrid;
