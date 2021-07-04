import { QuestionCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import * as queryString from 'query-string';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { BackLink, InsaButton, PageTopWrapper } from '../../../components';
import { DefaultLayout } from '../../../layout';
import GeneralInformationContent from './general-information';
import ProviderBillingContext from './state/context';
import CreateStore from '../../create-store/create-store';
import EditStore from '../../../pages/homepage/components/user-guide-setting/edit-store';

const { Title } = Typography;

function GeneralInformation() {
    const history = useHistory();
    const searchState: {
        packagesSelect?: string;
        billingCycle?: string;
    } = queryString.parse(history.location.search);

    return (
        <ProviderBillingContext
            packagesSelect={searchState.packagesSelect}
            billingCycle={searchState.billingCycle}
        >
            <EditStore />
            <CreateStore />
            <DefaultLayout title="Thông tin chung">
                <PageTopWrapper
                    leftContent={
                        <>
                            <BackLink to="/setting" text="Cài đặt" />

                            <Title level={3}>THÔNG TIN CHUNG</Title>
                        </>
                    }
                    // TODO: Show after add feature
                    // rightContent={
                    //     <InsaButton icon={<QuestionCircleOutlined />}>Trợ giúp</InsaButton>
                    // }
                />
                <div className="content general-information">
                    <GeneralInformationContent />
                </div>
            </DefaultLayout>
        </ProviderBillingContext>
    );
}
export default GeneralInformation;
