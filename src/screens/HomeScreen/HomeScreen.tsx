import React, { FC, useEffect } from "react";
import AppLayout from "layouts/AppLayout/AppLayout";
import { connect } from "react-redux";
import { RootState } from "redux/rootReducers";
import countActions from "redux/count/count.actions";
import { UpdatePressCountPayload } from "redux/count/count.types";
import userActions from "redux/user/user.actions";
import { FetchUserListPayload, UserState, User } from "redux/user/user.types";
import RequestStatus from "utils/requestStatus";

interface Props {
    count: number;
    updatePressCount: (payload: UpdatePressCountPayload) => void;
    updatePressCountAsync: (payload: UpdatePressCountPayload) => void;
    fetchUserList: (payload: FetchUserListPayload) => void;
    user: UserState;
}

const HomeScreen: FC<Props> = ({
    count,
    updatePressCount,
    updatePressCountAsync,
    fetchUserList,
    user,
}) => {
    const updateCount = (offset: number) => {
        updatePressCount({
            offset,
        });
    };

    const updateCountAsync = (offset: number) => {
        updatePressCountAsync({
            offset,
        });
    };

    useEffect(() => {
        fetchUserList({ page: 1 });
    }, [fetchUserList]);

    return (
        <AppLayout>
            HomeScreen
            <hr />
            <div>
                {/* Count Action */}
                <button onClick={() => updateCount(-1)}>-</button>
                {count}
                <button onClick={() => updateCount(1)}>+</button>
            </div>
            <div>
                {/* Count Action Async */}
                <button onClick={() => updateCountAsync(-1)}>- Async</button>
                {count}
                <button onClick={() => updateCountAsync(1)}>+ Async</button>
            </div>
            <hr />
            <div>User List:</div>
            {user.fetchUser.requestStatus === RequestStatus.REQUESTING && (
                <div>Loading</div>
            )}
            {user.fetchUser.data?.map((user: User) => (
                <div>{user.first_name}</div>
            ))}
        </AppLayout>
    );
};

const mapStateToProps = (state: RootState) => ({
    count: state.pressCount.count,
    user: state.user,
});

const mapDispatchToProps = {
    updatePressCount: countActions.updatePressCount,
    updatePressCountAsync: countActions.updatePressCountAsync,
    fetchUserList: userActions.fetchUserList,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
