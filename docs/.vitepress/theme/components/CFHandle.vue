<script lang="ts" setup>
    import { computed, toRefs } from 'vue';
    import { useCFUserInfo, CFRank } from '../composables/useCFUserInfo';
    const props = 
        defineProps<{
            nickname: string;
            rank?: CFRank;
            displayMaxRank?: string | boolean;
            prefixWithRank?: string | boolean;
        }>();
    const { nickname, rank, displayMaxRank, prefixWithRank } = toRefs(props);

    var displayMaxRankValue;
    var prefixWithRankValue = ((typeof prefixWithRank.value) == 'string') ? (prefixWithRank.value == 'true') : (prefixWithRank.value == true);

    function useRank() {
        // TODO make rank reactive?
        if (rank?.value) return rank;
        const { userInfo, error } = useCFUserInfo(nickname);
        return computed(() => {
            if (error.value) {
                console.error(error.value);
                return undefined;
            }

            displayMaxRankValue = ((typeof displayMaxRank.value) == 'string') ? (displayMaxRank.value == 'true') : (displayMaxRank.value == true);
            return displayMaxRankValue ? userInfo.value?.maxRank : userInfo.value?.rank;
        });
    }

    const computedRank = useRank();
</script>

<template>
    <span>
        <span v-if="prefixWithRankValue">{{ computedRank ?? '' }}</span> <a
            class="cf-handle"
            :class="computedRank?.replace(' ', '-') ?? ''"
            :href="`https://codeforces.com/profile/${nickname}`"
            target="_blank"
            >{{ nickname }}</a
        >
    </span>
</template>

<style>
    .cf-handle {
        font-weight: 500;
        display: inline-block;
    }
    .cf-handle.newbie {
        color: gray;
    }
    .cf-handle.pupil {
        color: #77ff77;
    }
    .cf-handle.specialist {
        color: #77ddbb;
    }
    .cf-handle.expert {
        color: #aaaaff;
    }
    .cf-handle.candidate-master {
        color: #ff88ff;
    }
    .cf-handle.master {
        color: #ffcc88;
    }
    .cf-handle.international-master {
        color: #ffbb55;
    }
    .cf-handle.grandmaster {
        color: #ff7777;
    }
    .cf-handle.international-grandmaster {
        color: #ff3333;
    }
    .cf-handle.legendary-grandmaster {
        color: #ff3333;
    }
    .cf-handle.legendary-grandmaster::first-letter {
        color: black;
    }
    .cf-handle.headquater {
        color: black;
    }

    .dark .cf-handle.legendary-grandmaster::first-letter {
        color: white;
    }

    .dark .cf-handle.headquater {
        color: white;
    }
</style>
